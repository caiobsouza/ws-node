const icecreamRoute = require('./icecreams-route');

module.exports = app => {
  app.use('/icecream', icecreamRoute);
};
