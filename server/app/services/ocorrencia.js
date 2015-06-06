'use strict';

module.exports = function (app) {
  
  var OcorrenciaService = {
    create: function (ocorrencia) {
      return app.daos.ocorrencia.create(ocorrencia).then(function (data) {
        return data;
      });
    },
    update: function (model) {
      return app.daos.ocorrencia.update(model).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.ocorrencia.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.ocorrencia.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.ocorrencia.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };
  
  return OcorrenciaService;
};