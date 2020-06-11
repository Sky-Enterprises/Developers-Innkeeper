require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
  if (msg.author.bot) {
    return;
  }

  if (msg.content.startsWith('!hello')) {
    msg.reply('world!');
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
