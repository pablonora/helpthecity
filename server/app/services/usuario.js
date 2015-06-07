'use strict';

var bcrypt = require('bcryptjs');

module.exports = function (app) {
  
  var UsuarioService = {
    create: function (usuario) {
      usuario.senha = bcrypt.hashSync(usuario.senha, 6);
      return app.daos.usuario.create(usuario).then(function (data) {
        return data;
      });                                      
    },
    update: function (model) {
      return app.daos.usuario.update(model).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.usuario.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.usuario.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.usuario.readByCriteria(criteria).then(function (data) {
        return data;
      });
    },
    readByEmail: function (email) {
      return app.daos.usuario.readByEmail(email).then(function (data) {
        return data;
      });
    }
  };
  
  return UsuarioService;
};