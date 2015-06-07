'use strict';

module.exports = function (app, config) {
  var configuracao = app.controllers.configuracao,
      auth = require('../middlewares/auth');
  
  app.post(config.url + '/configuracao', auth, configuracao.create);
  app.put(config.url + '/configuracao/:id', auth, configuracao.update);
  app.delete(config.url + '/configuracao/:id', auth, configuracao.delete);
  app.get(config.url + '/configuracao/:id', auth, configuracao.readById);
  app.get(config.url + '/configuracao', auth, configuracao.readByCriteria);
};