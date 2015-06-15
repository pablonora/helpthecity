'use strict';

module.exports = function (app, config) {
  var ReportCategory = app.controllers.ReportCategory,
    auth = require('../middlewares/auth');

  app.post(config.url + '/reportCategory', auth, ReportCategory.create);
  app.put(config.url + '/reportCategory/:id', auth, ReportCategory.update);
  app.delete(config.url + '/reportCategory/:id', auth, ReportCategory.delete);
  app.get(config.url + '/reportCategory/:id', auth, ReportCategory.readById);
  app.get(config.url + '/reportCategory', auth, ReportCategory.readByCriteria);
};