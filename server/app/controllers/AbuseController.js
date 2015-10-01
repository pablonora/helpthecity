'use strict';

module.exports = function (app) {

  var AbuseController = {
    create: function (req, res) {
      app.services.Abuse.create(req.body.abuse).then(function (result) {
        res.json(result);
      });
    },
    update: function (req, res) {
			req.body.abuse.id = req.params.id;
      app.services.Abuse.update(req.body.abuse).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.Abuse.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.Abuse.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.Abuse.readByCriteria(req.query.criteria).then(function (result) {
        res.json(result);
      });
    }
  };

  return AbuseController;
};