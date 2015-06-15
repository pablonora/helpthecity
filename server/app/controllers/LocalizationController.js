'use strict';

module.exports = function (app) {

  var LocalizationController = {
    create: function (req, res) {
      app.services.Localization.create(req.body).then(function (result) {
        res.json(result);
      });
    },
    update: function (req, res) {
      req.body.id = req.params.id;
      app.services.Localization.update(req.body).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.Localization.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.Localization.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.Localization.readByCriteria(req.query.criteria).then(function (result) {
        res.json(result);
      });
    }
  };

  return LocalizationController;
};