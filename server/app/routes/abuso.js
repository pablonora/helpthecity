'use strict';

module.exports = function (app, config) {
  var abuso = app.controllers.abuso,
      auth = require('../middlewares/auth');
  
  app.post(config.url + '/abuso', auth, abuso.create);
  app.put(config.url + '/abuso/:id', auth, abuso.update);
  app.delete(config.url + '/abuso/:id', auth, abuso.delete);
  app.get(config.url + '/abuso/:id', auth, abuso.readById);
  app.get(config.url + '/abuso', auth, abuso.readByCriteria);
};