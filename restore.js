const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\mobile note\\.gemini\\antigravity\\brain\\d0b6672c-9af6-4dcb-9115-ebb134cd37df\\.system_generated\\logs\\transcript.jsonl';
const targetTime = new Date('2026-05-28T09:51:42Z'); // ステップ710のタイムスタンプ

const files = {};

function normalizePath(p) {
  if (!p) return '';
  // クォーテーションを削除し、大文字小文字/スラッシュを統一
  return path.resolve(p.replace(/"/g, '').trim()).toLowerCase();
}

function applyReplace(content, target, replacement) {
  if (!content) return content;
  // 改行コードの違いを吸収するために正規化
  const normalizeNL = (str) => str.replace(/\r\n/g, '\n');
  const normalizedContent = normalizeNL(content);
  const normalizedTarget = normalizeNL(target);
  const normalizedReplacement = normalizeNL(replacement);

  if (!normalizedContent.includes(normalizedTarget)) {
    console.warn(`Warning: Target not found in file.`);
    // 念のためそのままの文字列置換も試みる
    if (content.includes(target)) {
      return content.replace(target, replacement);
    }
    return content;
  }
  const result = normalizedContent.replace(normalizedTarget, normalizedReplacement);
  // OSの改行コードに戻す（元のファイルが \r\n だった可能性を考慮。ここでは \n で統一されてもNext.jsビルドは通る）
  return result;
}

const lines = fs.readFileSync(logPath, 'utf-8').split('\n');

for (const line of lines) {
  if (!line.trim()) continue;
  let step;
  try {
    step = JSON.parse(line);
  } catch (e) {
    console.error('Failed to parse line:', e.message);
    continue;
  }

  const stepTime = new Date(step.created_at);
  if (stepTime >= targetTime) {
    // ターゲット時間以降の変更は無視
    continue;
  }

  if (step.tool_calls && step.tool_calls.length > 0) {
    for (const tool of step.tool_calls) {
      if (tool.name === 'write_to_file') {
        const filePath = normalizePath(tool.args.TargetFile);
        const codeContent = tool.args.CodeContent;
        if (filePath && codeContent !== undefined) {
          files[filePath] = codeContent;
          console.log(`[write_to_file] ${filePath} (Step ${step.step_index})`);
        }
      } else if (tool.name === 'replace_file_content') {
        const filePath = normalizePath(tool.args.TargetFile);
        const targetContent = tool.args.TargetContent;
        const replacementContent = tool.args.ReplacementContent;
        if (filePath && files[filePath] !== undefined) {
          files[filePath] = applyReplace(files[filePath], targetContent, replacementContent);
          console.log(`[replace_file_content] ${filePath} (Step ${step.step_index})`);
        }
      } else if (tool.name === 'multi_replace_file_content') {
        const filePath = normalizePath(tool.args.TargetFile);
        const chunks = tool.args.ReplacementChunks;
        if (filePath && files[filePath] !== undefined && chunks) {
          let content = files[filePath];
          for (const chunk of chunks) {
            content = applyReplace(content, chunk.TargetContent, chunk.ReplacementContent);
          }
          files[filePath] = content;
          console.log(`[multi_replace_file_content] ${filePath} (Step ${step.step_index})`);
        }
      }
    }
  }
}

// 復元したファイルを書き出す
console.log('\n--- Writing restored files ---');
const projectRoot = 'C:\\Users\\mobile note\\.gemini\\antigravity\\scratch\\ashiya-fukusuke-next';

for (const [filePath, content] of Object.entries(files)) {
  // プロジェクトディレクトリ配下のファイルのみ書き戻す
  if (filePath.startsWith(projectRoot.toLowerCase())) {
    // クォーテーションなどのトリム
    let cleanContent = content;
    if (cleanContent.startsWith('"') && cleanContent.endsWith('"')) {
      // JSONエスケープされた文字列なのでデコード
      try {
        cleanContent = JSON.parse(cleanContent);
      } catch (e) {
        cleanContent = cleanContent.slice(1, -1);
      }
    }
    
    // ディレクトリ作成
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, cleanContent, 'utf-8');
    console.log(`Restored: ${filePath}`);
  }
}
console.log('Restoration complete!');
