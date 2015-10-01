'use strict';

module.exports = function (app) {

  var ReportCategoryController = {
    create: function (req, res) {
      app.services.ReportCategory.create(req.body.reportCategory).then(function (result) {
        res.json(result);
      });
    },
    update: function (req, res) {
			req.body.reportCategory.id = req.params.id;
      app.services.ReportCategory.update(req.body.reportCategory).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.ReportCategory.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.ReportCategory.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.ReportCategory.readByCriteria(req.query.criteria).then(function (result) {
        res.json(result);
      });
    }
  };

  return ReportCategoryController;
};