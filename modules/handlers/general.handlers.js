const fs = require("fs")
const Commands = require('../utils/commands')

const suggestionCommand = "!bookie suggestion";
const helpCommand = "!bookie help";

const handleSuggestion = (message, bot) => {

  const user = message.author.username;
  const suggestion = message.content.substring(suggestionCommand.length + 1);

  fs.writeFileSync(`suggestions/${user}-${suggestion.substr(0, 10)}-${Date.now()}`, suggestion)
  message.reply("Thanks! I'll read that suggestion later.")
}

const handleHelp = (message, bot) => {
    const commandList = Object.keys(Commands.getAvailableCommandList());
    message.reply(`here's a list of my available commands: ${commandList}`)
  }

const commandHandlerMap = {
    [suggestionCommand]: handleSuggestion,
    [helpCommand]: handleHelp
};

exports.commandHandlerMap = commandHandlerMap; 