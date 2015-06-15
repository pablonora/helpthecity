'use strict';

module.exports = function (app, config) {
  var Configuration = app.controllers.Configuration,
    auth = require('../middlewares/auth');

  app.post(config.url + '/configuration', auth, Configuration.create);
  app.put(config.url + '/configuration/:id', auth, Configuration.update);
  app.delete(config.url + '/configuration/:id', auth, Configuration.delete);
  app.get(config.url + '/configuration/:id', auth, Configuration.readById);
  app.get(config.url + '/configuration', auth, Configuration.readByCriteria);
};