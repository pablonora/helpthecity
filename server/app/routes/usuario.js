'use strict';

module.exports = function (app, config) {
  var usuario = app.controllers.usuario;
  
  app.post(config.url + '/usuario', usuario.create);
  app.put(config.url + '/usuario/:id', usuario.update);
  app.delete(config.url + '/usuario/:id', usuario.delete);
  app.get(config.url + '/usuario/:id', usuario.readById);
  app.get(config.url + '/usuario', usuario.readByCriteria);
  app.post(config.url + '/usuario/login', usuario.login);
  app.delete(config.url + '/usuario/logout', usuario.logout);
};