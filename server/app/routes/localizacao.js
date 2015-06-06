'use strict';

module.exports = function (app, config) {
  var localizacao = app.controllers.localizacao;
  
  app.post(config.url + '/localizacao', localizacao.create);
  app.put(config.url + '/localizacao/:id', localizacao.update);
  app.delete(config.url + '/localizacao/:id', localizacao.delete);
  app.get(config.url + '/localizacao/:id', localizacao.readById);
  app.get(config.url + '/localizacao', localizacao.readByCriteria);
};