'use strict';

module.exports = function (app) {
  
  var CategoriaAbusoService = {
    create: function (categoriaAbuso) {
      return app.daos.categoriaAbuso.create(categoriaAbuso).then(function (data) {
        return data;
      });
    },
    update: function (model) {
      return app.daos.categoriaAbuso.update(model).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.categoriaAbuso.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.categoriaAbuso.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.categoriaAbuso.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };
  
  return CategoriaAbusoService;
};