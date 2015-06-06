'use strict';

module.exports = function (app) {
  
  var UpService = {
    create: function (up) {
      return app.daos.up.create(up).then(function (data) {
        return data;
      });
    },
    update: function (model) {
      return app.daos.up.update(model).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.up.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.up.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.up.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };
  
  return UpService;
};