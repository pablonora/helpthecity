'use strict';

module.exports = function (app, config) {
  var ocorrencia = app.controllers.ocorrencia;
  
  app.post(config.url + '/ocorrencia', ocorrencia.create);
  app.put(config.url + '/ocorrencia/:id', ocorrencia.update);
  app.delete(config.url + '/ocorrencia/:id', ocorrencia.delete);
  app.get(config.url + '/ocorrencia/:id', ocorrencia.readById);
  app.get(config.url + '/ocorrencia', ocorrencia.readByCriteria);
};