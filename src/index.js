require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const prefix = "!ik"

const commands = {};
const files = fs.readdirSync('./src/commands');
const jsFiles = files.filter((file) => file.endsWith('.js'));
jsFiles.forEach((commandFile) => {
  const importedCommandFile = require(`./commands/${commandFile}`);
  if (importedCommandFile.command && importedCommandFile.fn) {
    commands[importedCommandFile.command] = importedCommandFile.fn;
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
  const msgPrefix = msg.content.split(' ')[0];
  if (msgPrefix === prefix) {
    const command = msg.content.split(' ')[1];
    if (commands[command] === undefined || msg.author.bot) {
      return;
    }

    commands[command](msg);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);