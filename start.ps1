# Try to set localStorage flag (note: flag format may be --localstorage-file)
try {
    $env:NODE_OPTIONS = "--localstorage-file=$PSScriptRoot\.local-storage.json"
    Write-Host "Set NODE_OPTIONS with localStorage flag" -ForegroundColor Green
} catch {
    Write-Host "Note: Could not set localStorage flag, continuing anyway..." -ForegroundColor Yellow
}

# Run react-app-rewired directly (not through npm to avoid circular dependency)
& "C:\Program Files\nodejs\npm.cmd" run start:direct
