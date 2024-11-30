if exist ".env" (
    node .\src\index.js
) else (
    .\setup\nodeSetup.bat
)