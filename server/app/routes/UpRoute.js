'use strict';

module.exports = function (app, config) {
  var Up = app.controllers.Up,
    auth = require('../middlewares/auth');

  app.post(config.url + '/up', auth, Up.create);
  app.put(config.url + '/up/:id', auth, Up.update);
  app.delete(config.url + '/up/:id', auth, Up.delete);
  app.get(config.url + '/up/:id', auth, Up.readById);
  app.get(config.url + '/up', auth, Up.readByCriteria);
};