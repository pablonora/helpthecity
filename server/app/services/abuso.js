'use strict';

module.exports = function (app) {
  
  var AbusoService = {
    create: function (abuso) {
      return app.daos.abuso.create(abuso).then(function (data) {
        return data;
      });
    },
    update: function (model) {
      return app.daos.abuso.update(model).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.abuso.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.abuso.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.abuso.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };
  
  return AbusoService;
};