@echo off
cls

cd ..
set /p userID=Enter your User-ID:
set /p botID=Enter your Bot-ID:
set /p token=Enter your Bot-Token:

echo userID='%userID%' > .env
echo botID='%botID%' >> .env
echo token='%token%' >> .env

start.bat