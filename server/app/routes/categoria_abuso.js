'use strict';

module.exports = function (app, config) {
  var categoriaAbuso = app.controllers.categoriaAbuso,
      auth = require('../middlewares/auth');
  
  app.post(config.url + '/categoriaAbuso', auth, categoriaAbuso.create);
  app.put(config.url + '/categoriaAbuso/:id', auth, categoriaAbuso.update);
  app.delete(config.url + '/categoriaAbuso/:id', auth, categoriaAbuso.delete);
  app.get(config.url + '/categoriaAbuso/:id', auth, categoriaAbuso.readById);
  app.get(config.url + '/categoriaAbuso', auth, categoriaAbuso.readByCriteria);
};