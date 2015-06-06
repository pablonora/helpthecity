'use strict';

module.exports = function (app) {

  var ConfiguracaoController = {
    create: function (req, res) {
      app.services.configuracao.create(req.body).then(function (result) {
        res.send(result)
      });
    },
    update: function (req, res) {
      req.body.id = req.params.id;
      app.services.configuracao.update(req.body).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.configuracao.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.configuracao.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.configuracao.readByCriteria(req.query.criteria).then(function (result) {
        res.send(result);
      });
    }
  };
  
  return ConfiguracaoController;
};
