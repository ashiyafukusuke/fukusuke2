Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\mobile note\.gemini\antigravity\scratch\ashiya-fukusuke-next\public\images\fukusuke_icon.png"
$dstPath = "c:\Users\mobile note\.gemini\antigravity\scratch\ashiya-fukusuke-next\public\images\fukusuke_icon.png"

try {
    $bitmap = New-Object System.Drawing.Bitmap($srcPath)
    $newBitmap = New-Object System.Drawing.Bitmap($bitmap.Width, $bitmap.Height)
    
    for ($x = 0; $x -lt $bitmap.Width; $x++) {
        for ($y = 0; $y -lt $bitmap.Height; $y++) {
            $pixel = $bitmap.GetPixel($x, $y)
            # If the pixel is close to white, make it transparent
            if ($pixel.R -gt 240 -and $pixel.G -gt 240 -and $pixel.B -gt 240) {
                $newColor = [System.Drawing.Color]::FromArgb(0, 255, 255, 255)
            } else {
                $newColor = $pixel
            }
            $newBitmap.SetPixel($x, $y, $newColor)
        }
    }
    
    $bitmap.Dispose()
    # Save overwrites existing
    $newBitmap.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $newBitmap.Dispose()
    Write-Host "Success! Made background transparent."
} catch {
    Write-Host "Error: $($_.Exception.Message)"
}
