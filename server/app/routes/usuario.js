'use strict';

module.exports = function (app, config) {
  var usuario = app.controllers.usuario,
      auth = require('../middlewares/auth');
  
  app.post(config.url + '/usuario', usuario.create);
  app.put(config.url + '/usuario/:id', auth, usuario.update);
  app.delete(config.url + '/usuario/:id', auth, usuario.delete);
  app.get(config.url + '/usuario/:id', auth, usuario.readById);
  app.get(config.url + '/usuario', auth, usuario.readByCriteria);
  app.get(config.url + '/usuario/:email', auth, usuario.readByEmail);
};