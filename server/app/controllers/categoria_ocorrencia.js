'use strict';

module.exports = function (app) {

  var CategoriaOcorrenciaController = {
    create: function (req, res) {
      app.services.categoriaOcorrencia.create(req.body).then(function (result) {
        res.send(result)
      });
    },
    update: function (req, res) {
      req.body.id = req.params.id;
      app.services.categoriaOcorrencia.update(req.body).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.categoriaOcorrencia.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.categoriaOcorrencia.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.categoriaOcorrencia.readByCriteria(req.query.criteria).then(function (result) {
        res.send(result);
      });
    }
  };
  
  return CategoriaOcorrenciaController;
};
