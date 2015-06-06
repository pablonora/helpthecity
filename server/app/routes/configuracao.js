'use strict';

module.exports = function (app, config) {
  var configuracao = app.controllers.configuracao;
  
  app.post(config.url + '/configuracao', configuracao.create);
  app.put(config.url + '/configuracao/:id', configuracao.update);
  app.delete(config.url + '/configuracao/:id', configuracao.delete);
  app.get(config.url + '/configuracao/:id', configuracao.readById);
  app.get(config.url + '/configuracao', configuracao.readByCriteria);
};