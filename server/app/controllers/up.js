'use strict';

module.exports = function (app) {

  var UpController = {
    create: function (req, res) {
      app.services.up.create(req.body).then(function (result) {
        res.send(result)
      });
    },
    update: function (req, res) {
      req.body.id = req.params.id;
      app.services.up.update(req.body).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.up.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.up.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.up.readByCriteria(req.query.criteria).then(function (result) {
        res.send(result);
      });
    }
  };
  
  return UpController;
};