'use strict';

module.exports = function (app, config) {
  var localizacao = app.controllers.localizacao,
      auth = require('../middlewares/auth');
  
  app.post(config.url + '/localizacao', auth, localizacao.create);
  app.put(config.url + '/localizacao/:id', auth, localizacao.update);
  app.delete(config.url + '/localizacao/:id', auth, localizacao.delete);
  app.get(config.url + '/localizacao/:id', auth, localizacao.readById);
  app.get(config.url + '/localizacao', auth, localizacao.readByCriteria);
};