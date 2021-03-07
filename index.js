require('dotenv').config();
const Discord = require('discord.js');
const Commands = require('./modules/utils/commands')
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

// Retrieve the object containing the map of commandNames: commandFucntions
const availableCommands = Commands.getAvailableCommandList()

// Listen to very message and respond to any that correspond to one
// of our defined functions
bot.on('message', message => {
  Object.keys(availableCommands).forEach(handler => {
    if (message.content.startsWith(handler)) {
      availableCommands[handler](message, bot);
    }
  });
});
