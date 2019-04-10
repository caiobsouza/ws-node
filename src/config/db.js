const mongoose = require('mongoose');
const winston = require('winston');

module.exports = {
  setup() {
    // TODO: connect to mongodb, pg, etc
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/workshop', (err) => {
      if (err) {
        winston.error(`db connection error: ${err.message}`);
      }
      winston.info('db connection stablished');
    });
  }
};
