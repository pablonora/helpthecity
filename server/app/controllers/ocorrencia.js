'use strict';

module.exports = function (app) {

  var OcorrenciaController = {
    create: function (req, res) {
      app.services.ocorrencia.create(req.body).then(function (result) {
        res.send(result)
      });
    },
    update: function (req, res) {
      req.body.id = req.params.id;
      app.services.ocorrencia.update(req.body).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.ocorrencia.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.ocorrencia.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.ocorrencia.readByCriteria(req.query.criteria).then(function (result) {
        res.send(result);
      });
    }
  };
  
  return OcorrenciaController;
};
