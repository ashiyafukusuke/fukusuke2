$logPath = "C:\Users\mobile note\.gemini\antigravity\brain\d0b6672c-9af6-4dcb-9115-ebb134cd37df\.system_generated\logs\transcript.jsonl"
$targetTime = [DateTime]::Parse("2026-05-28T09:51:42Z") # ステップ710のタイムスタンプ
$projectRoot = "C:\Users\mobile note\.gemini\antigravity\scratch\ashiya-fukusuke-next"

$files = @{}

function NormalizePath {
    param($p)
    if (-not $p) { return "" }
    $clean = $p.Replace('"', '').Trim()
    return [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($projectRoot, $clean))
}

function ApplyReplace {
    param($content, $target, $replacement)
    if ([string]::IsNullOrEmpty($content)) { return $content }
    if ([string]::IsNullOrEmpty($target)) { return $content }
    if ($null -eq $replacement) { $replacement = "" }
    
    $normContent = $content.Replace("`r`n", "`n")
    $normTarget = $target.Replace("`r`n", "`n")
    $normReplacement = $replacement.Replace("`r`n", "`n")

    if ($normContent.Contains($normTarget)) {
        return $normContent.Replace($normTarget, $normReplacement)
    } else {
        if ($content.Contains($target)) {
            return $content.Replace($target, $replacement)
        }
        Write-Host "Warning: Target content not found for replacement."
        return $content
    }
}

$reader = [System.IO.File]::OpenText($logPath)
try {
    while ($null -ne ($line = $reader.ReadLine())) {
        if ([string]::IsNullOrWhiteSpace($line)) { continue }
        
        $step = $null
        try {
            $step = $line | ConvertFrom-Json -ErrorAction Stop
        } catch {
            continue
        }

        if ($null -ne $step) {
            $stepTime = [DateTime]::Parse($step.created_at)
            if ($stepTime -lt $targetTime) {
                if ($step.tool_calls -and $step.tool_calls.Count -gt 0) {
                    foreach ($tool in $step.tool_calls) {
                        try {
                            if ($tool.name -eq "write_to_file") {
                                $rawPath = $tool.args.TargetFile
                                $filePath = NormalizePath $rawPath
                                $code = $tool.args.CodeContent
                                if ($filePath -and $null -ne $code) {
                                    $files[$filePath] = $code
                                    Write-Host "[write_to_file] $filePath (Step $($step.step_index))"
                                }
                            }
                            elseif ($tool.name -eq "replace_file_content") {
                                $rawPath = $tool.args.TargetFile
                                $filePath = NormalizePath $rawPath
                                $target = $tool.args.TargetContent
                                $replacement = $tool.args.ReplacementContent
                                
                                if ($filePath -and $files.ContainsKey($filePath)) {
                                    $files[$filePath] = ApplyReplace $files[$filePath] $target $replacement
                                    Write-Host "[replace_file_content] $filePath (Step $($step.step_index))"
                                }
                            }
                            elseif ($tool.name -eq "multi_replace_file_content") {
                                $rawPath = $tool.args.TargetFile
                                $filePath = NormalizePath $rawPath
                                $chunks = $tool.args.ReplacementChunks
                                
                                if ($filePath -and $files.ContainsKey($filePath) -and $chunks) {
                                    $currentContent = $files[$filePath]
                                    foreach ($chunk in $chunks) {
                                        $currentContent = ApplyReplace $currentContent $chunk.TargetContent $chunk.ReplacementContent
                                    }
                                    $files[$filePath] = $currentContent
                                    Write-Host "[multi_replace_file_content] $filePath (Step $($step.step_index))"
                                }
                            }
                        }
                        catch {
                            Write-Host "Error processing tool call in step $($step.step_index): $_"
                        }
                    }
                }
            }
        }
    }
}
finally {
    $reader.Close()
}

Write-Host "`n--- Writing restored files ---"
foreach ($filePath in $files.Keys) {
    if ($filePath -and $filePath.StartsWith($projectRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
        $content = $files[$filePath]
        
        if ($content.StartsWith('"') -and $content.EndsWith('"')) {
            try {
                $content = $content | ConvertFrom-Json
            } catch {
                $content = $content.Substring(1, $content.Length - 2)
            }
        }
        
        $dir = Split-Path -Path $filePath
        if (-not (Test-Path -Path $dir)) {
            New-Item -ItemType Directory -Path $dir -Force | Out-Null
        }
        [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Restored: $filePath"
    }
}
Write-Host "Restoration complete!"
