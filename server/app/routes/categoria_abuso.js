'use strict';

module.exports = function (app, config) {
  var categoriaAbuso = app.controllers.categoriaAbuso;
  
  app.post(config.url + '/categoriaAbuso', categoriaAbuso.create);
  app.put(config.url + '/categoriaAbuso/:id', categoriaAbuso.update);
  app.delete(config.url + '/categoriaAbuso/:id', categoriaAbuso.delete);
  app.get(config.url + '/categoriaAbuso/:id', categoriaAbuso.readById);
  app.get(config.url + '/categoriaAbuso', categoriaAbuso.readByCriteria);
};