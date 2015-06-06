'use strict';

module.exports = function (app) {

  var UsuarioController = {
    create: function (req, res) {
      app.services.usuario.create(req.body).then(function (result) {
        res.send(result)
      });
    },
    update: function (req, res) {
      req.body.id = req.params.id;
      app.services.usuario.update(req.body).then(function (result) {
        res.json(result);
      });
    },
    delete: function (req, res) {
      app.services.usuario.delete(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readById: function (req, res) {
      app.services.usuario.readById(req.params.id).then(function (result) {
        res.json(result);
      });
    },
    readByCriteria: function (req, res) {
      app.services.usuario.readByCriteria(req.query.criteria).then(function (result) {
        res.send(result);
      });
    },
    login: function (req, res) {
      app.services.usuario.login(req.body.login, req.body.pass).then(function (result) {
        res.send(result);
      });
    }
  };
  
  return UsuarioController;
};
