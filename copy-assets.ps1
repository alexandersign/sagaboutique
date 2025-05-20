# Create directories if they don't exist
if (-not (Test-Path -Path "public\assets\brands")) {
    New-Item -ItemType Directory -Path "public\assets\brands" -Force
}

if (-not (Test-Path -Path "public\assets\logo")) {
    New-Item -ItemType Directory -Path "public\assets\logo" -Force
}

if (-not (Test-Path -Path "public\assets\stores")) {
    New-Item -ItemType Directory -Path "public\assets\stores" -Force
}

# Copy logo
Copy-Item -Path "..\assets\logo\SAGA-logo.png" -Destination "public\assets\logo\" -Force

# Copy brand logos
Copy-Item -Path "..\assets\brands\*.*" -Destination "public\assets\brands\" -Force

# Copy store images
Copy-Item -Path "..\assets\stores\*.*" -Destination "public\assets\stores\" -Force

Write-Host "Assets copied successfully!"
