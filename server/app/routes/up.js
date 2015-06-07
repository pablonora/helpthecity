'use strict';

module.exports = function (app, config) {
  var up = app.controllers.up,
      auth = require('../middlewares/auth');
  
  app.post(config.url + '/up', auth, up.create);
  app.put(config.url + '/up/:id', auth, up.update);
  app.delete(config.url + '/up/:id', auth, up.delete);
  app.get(config.url + '/up/:id', auth, up.readById);
  app.get(config.url + '/up', auth, up.readByCriteria);
};