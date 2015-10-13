'use strict';

module.exports = function (app, config) {
  var Report = app.controllers.Report,
    auth = require('../middlewares/auth');

  app.post(config.url + '/report', auth, Report.create);
  app.put(config.url + '/report/:id', auth, Report.update);
  app.delete(config.url + '/report/:id', auth, Report.delete);
  app.get(config.url + '/report/:id', auth, Report.readById);
  app.get(config.url + '/report', auth, Report.readByCriteria);
  app.get(config.url + '/reportsWithUsers', auth, Report.readAllWithUsers);
};