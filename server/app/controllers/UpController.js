'use strict';

module.exports = function (app) {

  var UpController = {
    create: function (req, res) {
      app.services.Up.create(req.body.up).then(function (result) {
        res.json(result);
      });
    },
    update: function (req, res) {
      app.services.Up.update(req.body.up).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.Up.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.Up.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.Up.readByCriteria(req.query.criteria).then(function (result) {
        res.json(result);
      });
    }
  };

  return UpController;
};