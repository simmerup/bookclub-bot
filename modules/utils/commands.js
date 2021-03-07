const GoodreadsHandler = require('../handlers/goodreads.handlers.js');
const GeneralHandler = require('../handlers/general.handlers.js');

const getAvailableCommandList = () => {
  return Object.assign(
    GoodreadsHandler.commandHandlerMap,
    GeneralHandler.commandHandlerMap
  );
}

exports.getAvailableCommandList = getAvailableCommandList;