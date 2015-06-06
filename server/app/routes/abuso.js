'use strict';

module.exports = function (app, config) {
  var abuso = app.controllers.abuso;
  
  app.post(config.url + '/abuso', abuso.create);
  app.put(config.url + '/abuso/:id', abuso.update);
  app.delete(config.url + '/abuso/:id', abuso.delete);
  app.get(config.url + '/abuso/:id', abuso.readById);
  app.get(config.url + '/abuso', abuso.readByCriteria);
};