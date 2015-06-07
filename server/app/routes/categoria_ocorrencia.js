'use strict';

module.exports = function (app, config) {
  var categoriaOcorrencia = app.controllers.categoriaOcorrencia,
      auth = require('../middlewares/auth');
  
  app.post(config.url + '/categoriaOcorrencia', auth, categoriaOcorrencia.create);
  app.put(config.url + '/categoriaOcorrencia/:id', auth, categoriaOcorrencia.update);
  app.delete(config.url + '/categoriaOcorrencia/:id', auth, categoriaOcorrencia.delete);
  app.get(config.url + '/categoriaOcorrencia/:id', auth, categoriaOcorrencia.readById);
  app.get(config.url + '/categoriaOcorrencia', auth, categoriaOcorrencia.readByCriteria);
};