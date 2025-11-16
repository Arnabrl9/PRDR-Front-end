# Script to properly stop all Node.js processes
Write-Host "Stopping Node.js processes..." -ForegroundColor Yellow

# Kill all node processes
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Also try to kill processes using port 3000
$port = 3000
$connections = netstat -ano | findstr ":$port"
if ($connections) {
    Write-Host "Found processes using port $port, attempting to free it..." -ForegroundColor Yellow
    foreach ($line in $connections) {
        $parts = $line -split '\s+'
        if ($parts[-1] -match '\d+') {
            $pid = $parts[-1]
            try {
                Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
                Write-Host "Killed process $pid" -ForegroundColor Green
            } catch {
                Write-Host "Could not kill process $pid" -ForegroundColor Red
            }
        }
    }
}

Write-Host "Done! Port should be free now." -ForegroundColor Green
Write-Host "You can now run 'npm start' again." -ForegroundColor Green


