set currentDir=%cd%
cd /d "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp"
echo @echo off > MFX_Control_Bot.bat
echo pushd %currentDir% >> MFX_Control_Bot.bat
echo cd.. >> MFX_Control_Bot.bat
echo mode con: cols=32 lines=3 >> MFX_Control_Bot.bat
echo color f0 >> MFX_Control_Bot.bat
echo echo Starting Bot... >> MFX_Control_Bot.bat
echo echo This window can be closed now! >> MFX_Control_Bot.bat
echo silentStart.exe ^& >> MFX_Control_Bot.bat
pushd %currentDir%
genENV.bat