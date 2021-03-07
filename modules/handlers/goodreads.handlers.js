const GoodreadsService = require("../services/goodreads.service");

const findCommand = "!bookie find";

const handleFind = (message, bot) => {

  const searchTerm = message.content.substring(findCommand.length + 1);
  GoodreadsService.findFirst(searchTerm).then(bookUrl => {
    if (bookUrl != null) {
      message.reply(`here's the first result for '${searchTerm}': ${bookUrl}`);
    } else {
      message.reply(`I couldn't find anything for that, how embarassing...`);
    }        
    }).catch(error => {
      message.reply(`I ran into an error while looking for thisd book, ping @poggio if it keeps happening...`);
    });
}

const commandHandlerMap = {
    [findCommand]: handleFind
};

exports.commandHandlerMap = commandHandlerMap; 