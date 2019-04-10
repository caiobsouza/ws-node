const express = require('express');
const db = require('./config/db');

const app = express();

db.setup();

const middlewares = require('./middlewares');
const routes = require('./routes');

middlewares(app);
routes(app);

module.exports = app;
