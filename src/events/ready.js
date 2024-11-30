const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

        try {
            const user = await client.users.fetch(process.env.userID);

            if (user) {
                client.user.setPresence({ activities: [{ name: 'activity' }], status: 'online' });
                client.user.setActivity(user.username, { type: ActivityType.Listening });
                console.log(`Now listening to: ${user.username}`);
            } else {
                console.error('User not found');
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    },
};
