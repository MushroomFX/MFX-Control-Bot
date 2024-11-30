# MFX-Control-Bot
A Discord bot for controlling your PC

## Current features
- `/sd` - Shutdown your PC
- `/stop` - Force the bot to stop itself

## Setup
1. Set up a bot under the [Discord Developer Portal](https://discord.com/developers/applications)
2. Run the `start.bat` file
   - Enter your User ID
   - Enter your Bot ID
   - Enter your Bot Token

## Other
- If you need to change your User ID, Bot ID, or Bot Token, stop the bot, edit the `.env` file, or delete it and rerun `start.bat`.
- The bot installs to the directory where it's executed. To reinstall, stop the bot, move all files except the `.env` file, run `start.bat` (the inputs can be skipped by pressing enter), and overwrite the `.env` file with the existing one afterwards.
