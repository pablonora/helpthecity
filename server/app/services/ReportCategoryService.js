'use strict';

module.exports = function (app) {

  var ReportCategoryService = {
    create: function (reportCategory) {
      return app.daos.ReportCategory.create(reportCategory).then(function (data) {
        return data;
      });
    },
    update: function (reportCategory) {
      return app.daos.ReportCategory.update(reportCategory).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.ReportCategory.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.ReportCategory.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.ReportCategory.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };

  return ReportCategoryService;
};