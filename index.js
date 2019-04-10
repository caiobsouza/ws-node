const http = require('http');
const winston = require('winston');

const app = require('./src/app');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.on('error', (err) => {
  winston.error(err.message);
});

server.listen(PORT, () => {
  winston.info(`Server listening at ${PORT}`);
});
