'use strict';

module.exports = function (app) {

  var CategoriaAbusoController = {
    create: function (req, res) {
      app.services.categoriaAbuso.create(req.body).then(function (result) {
        res.send(result)
      });
    },
    update: function (req, res) {
      req.body.id = req.params.id;
      app.services.categoriaAbuso.update(req.body).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.categoriaAbuso.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.categoriaAbuso.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.categoriaAbuso.readByCriteria(req.query.criteria).then(function (result) {
        res.send(result);
      });
    }
  };
  
  return CategoriaAbusoController;
};
