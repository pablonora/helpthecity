'use strict';

module.exports = function (app, config) {
  var ocorrencia = app.controllers.ocorrencia,
      auth = require('../middlewares/auth');
  
  app.post(config.url + '/ocorrencia', auth, ocorrencia.create);
  app.put(config.url + '/ocorrencia/:id', auth, ocorrencia.update);
  app.delete(config.url + '/ocorrencia/:id', auth, ocorrencia.delete);
  app.get(config.url + '/ocorrencia/:id', auth, ocorrencia.readById);
  app.get(config.url + '/ocorrencia', auth, ocorrencia.readByCriteria);
};