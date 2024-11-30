const { SlashCommandBuilder } = require('@discordjs/builders');
const { ActivityType } = require('discord.js');
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection } = require(`discord.js`);
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 

require('dotenv').config();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stop the bot'),
    async execute(interaction, client) {
        const user = interaction.user.id

        if(user==process.env.userID){
            await interaction.reply({
                content: "Stopping bot!"
            }).then(() => {
                client.user.setPresence({ activities: [{ name: 'force killed' }], status: 'dnd' });
                process.exit(0);
            });
        } else {
            await interaction.reply({
                content: "no permission!"
            });
        }
    }
}