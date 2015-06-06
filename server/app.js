'use strict';

var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models'),
  app = express();

require('./config/express')(app, config);

// Load server essential functionalities
require('./app/daos')(app, config);

db.sequelize
  .sync() // use {force: true} as parameter when changing something into database tables.
  .then(function () {
    app.listen(config.port, function () {
      console.log('Server started!');
    });
  }).catch(function (e) {
    throw new Error(e);
  });
