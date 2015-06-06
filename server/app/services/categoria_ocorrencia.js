'use strict';

module.exports = function (app) {
  
  var CategoriaOcorrenciaService = {
    create: function (categoriaOcorrencia) {
      return app.daos.categoriaOcorrencia.create(categoriaOcorrencia).then(function (data) {
        return data;
      });
    },
    update: function (model) {
      return app.daos.categoriaOcorrencia.update(model).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.categoriaOcorrencia.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.categoriaOcorrencia.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.categoriaOcorrencia.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };
  
  return CategoriaOcorrenciaService;
};