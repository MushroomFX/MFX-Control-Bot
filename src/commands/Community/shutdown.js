const { SlashCommandBuilder } = require('@discordjs/builders');
const { ActivityType } = require('discord.js');
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection } = require(`discord.js`);
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 

require('dotenv').config();

var forceStop = 0;
var left = "";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sd')
        .setDescription('Shut down you PC')
        .addIntegerOption(option =>
            option
            .setName('time')
            .setDescription('Time in min (empty = cancel)')
            .setRequired(false)
        ),
    async execute(interaction, client) {
        const user = interaction.user.id

        if(user==process.env.userID){
            const time = interaction.options.getInteger('time');

            if(time == undefined) {
                exeCMD('shutdown /a');
                forceStop = 1
                await interaction.reply({
                    content: "shutdown canceld"
                });
            } else {
                exeCMD('shutdown /s /t ' + time * 60);
                client.user.setActivity(time + ":00 min till Shutdown");
                timer(time,client,interaction.user.username);
                await interaction.reply({
                    content: "Scheduled a shutdown " + `<t:${Math.floor(Date.now() / 1000) + (time * 60) }:R>`
                });
            }
        } else {
            await interaction.reply({
                content: "no permission!"
            });
        }
    }
}

const { exec } = require('child_process');
function exeCMD(cmdCommands){
    exec(cmdCommands,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
}

function timer(t,client,username) {
  var startTime = Date.now();
  var targetTime = Date.now() + t * 60 * 1000;
  var timerTimeout = setInterval(function () {
    var currentTime = Date.now();
    var timeLeft = Math.max(Math.ceil((targetTime - currentTime) / 1000), 0);
    var minutesLeft = Math.floor(timeLeft / 60);
    var secondsLeft = timeLeft % 60;
    left = minutesLeft + ":" + (secondsLeft < 10 ? "0" : "") + secondsLeft;

    client.user.setPresence({ activities: [{ name: 'activity' }], status: 'idle' });
    client.user.setActivity(left + "min till Shutdown");

    if (timeLeft === 0 || forceStop === 1) {
        forceStop = 0;
        clearInterval(timerTimeout);
        setTimeout(()=>{
            client.user.setPresence({ activities: [{ name: username }], status: 'online' });
            client.user.setActivity(username, { type: ActivityType.Listening });
        },7500)
      }

    console.log(left);
    console.log(minutesLeft,secondsLeft)
  }, 5000);
}
