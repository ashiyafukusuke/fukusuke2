const fs = require('fs');
const path = require('path');

const directory = 'src';
const searchAndReplace = [
  { search: /hibarigaoka_ashitsubo/g, replace: 'itakimo_hibarigaoka' },
  { search: /解剖生理学/g, replace: '身体の構造' },
  { search: /神経生理学/g, replace: '神経の働き' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const rule of searchAndReplace) {
        if (content.match(rule.search)) {
          content = content.replace(rule.search, rule.replace);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Modified: ' + fullPath);
      }
    }
  }
}

processDirectory(directory);
