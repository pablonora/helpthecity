'use strict';

module.exports = function (app) {
  
  var UsuarioService = {
    create: function (usuario) {
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
    login: function (login, pass) {
      return app.daos.usuario.login(login, pass).then(function (data) {
        return data;
      });
    },
    logout: function () {
      // TODO
    }
  };
  
  return UsuarioService;
};