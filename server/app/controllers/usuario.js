'use strict';

var sequelize = require('../models').sequelize;

module.exports = function (app) {

  var UsuarioController = {
    create: function (req, res) {
      return sequelize.transaction(function (t) {
        return app.services.configuracao.create(req.body.configuracao).then(function (id) {
          req.body.configuracao.configuracao_id = id;
          return app.services.usuario.create(req.body).then(function (result) {
            return result;
          });
        });
      }).then(function (result) {
        res.json(result);
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
        res.json(result);
      });
    },
    readByEmail: function (req, res) {
      app.services.usuario.readByEmail(req.query.email).then(function (result) {
        res.json(result);
      });
    }
  };
  
  return UsuarioController;
};
