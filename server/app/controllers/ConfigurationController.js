'use strict';

module.exports = function (app) {

  var ConfigurationController = {
    create: function (req, res) {
      app.services.configuration.create(req.body).then(function (result) {
        res.json(result);
      });
    },
    update: function (req, res) {
      req.body.id = req.params.id;
      app.services.configuration.update(req.body).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.configuration.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.configuration.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.configuration.readByCriteria(req.query.criteria).then(function (result) {
        res.json(result);
      });
    }
  };
  
  return ConfigurationController;
};
