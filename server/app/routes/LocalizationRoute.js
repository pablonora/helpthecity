'use strict';

module.exports = function (app, config) {
  var Localization = app.controllers.Localization,
    auth = require('../middlewares/auth');

  app.post(config.url + '/localization', auth, Localization.create);
  app.put(config.url + '/localization/:id', auth, Localization.update);
  app.delete(config.url + '/localization/:id', auth, Localization.delete);
  app.get(config.url + '/localization/:id', auth, Localization.readById);
  app.get(config.url + '/localization', auth, Localization.readByCriteria);
};