'use strict';

module.exports = function (app) {
  
  var ConfiguracaoService = {
    create: function (configuracao) {
      return app.daos.configuracao.create(configuracao).then(function (data) {
        return data;
      });
    },
    update: function (model) {
      return app.daos.configuracao.update(model).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.configuracao.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.configuracao.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.configuracao.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };
  
  return ConfiguracaoService;
};