'use strict';

module.exports = function (app) {

  var ReportService = {
    create: function (report) {
      return app.daos.Report.create(report).then(function (data) {
        return data;
      });
    },
    update: function (report) {
      return app.daos.Report.update(report).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.Report.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.Report.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.Report.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };

  return ReportService;
};