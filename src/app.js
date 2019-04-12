const express = require('express');
const db = require('./config/db');
const logger = require('./config/logger');

const app = express();

logger.setup();
db.setup();

const middlewares = require('./middlewares');
const routes = require('./routes');

middlewares(app);
routes(app);

module.exports = app;
