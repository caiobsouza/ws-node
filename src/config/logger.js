const winston = require('winston');

const addConsoleTransport = () => {
  const consoleTransport = new winston.transports.Console({
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  });

  winston.add(consoleTransport);
};
module.exports = {
  setup() {
    addConsoleTransport();
  },
};
