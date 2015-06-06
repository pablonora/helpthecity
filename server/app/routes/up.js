'use strict';

module.exports = function (app, config) {
  var up = app.controllers.up;
  
  app.post(config.url + '/up', up.create);
  app.put(config.url + '/up/:id', up.update);
  app.delete(config.url + '/up/:id', up.delete);
  app.get(config.url + '/up/:id', up.readById);
  app.get(config.url + '/up', up.readByCriteria);
};