'use strict';

module.exports = function (app) {
  
  var LocalizacaoService = {
    create: function (localizacao) {
      return app.daos.localizacao.create(localizacao).then(function (data) {
        return data;
      });
    },
    update: function (model) {
      return app.daos.localizacao.update(model).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.localizacao.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.localizacao.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.localizacao.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };
  
  return LocalizacaoService;
};