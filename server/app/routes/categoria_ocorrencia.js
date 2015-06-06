'use strict';

module.exports = function (app, config) {
  var categoriaOcorrencia = app.controllers.categoriaOcorrencia;
  
  app.post(config.url + '/categoriaOcorrencia', categoriaOcorrencia.create);
  app.put(config.url + '/categoriaOcorrencia/:id', categoriaOcorrencia.update);
  app.delete(config.url + '/categoriaOcorrencia/:id', categoriaOcorrencia.delete);
  app.get(config.url + '/categoriaOcorrencia/:id', categoriaOcorrencia.readById);
  app.get(config.url + '/categoriaOcorrencia', categoriaOcorrencia.readByCriteria);
};