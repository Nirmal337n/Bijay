# Chef Bijay Ghimire Website - Start Script
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Chef Bijay Ghimire - Professional Portfolio" -ForegroundColor Gold
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if Python is installed
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✓ Python found: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Python not found. Please install Python to run the local server." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Starting local web server..." -ForegroundColor Yellow
Write-Host "The website will open at: http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the server and open browser
Start-Process "http://localhost:8000"
python -m http.server 8000
