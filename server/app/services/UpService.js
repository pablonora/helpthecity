'use strict';

module.exports = function (app) {

  var UpService = {
    create: function (up) {
      return app.daos.Up.create(up).then(function (data) {
        return data;
      });
    },
    update: function (up) {
      return app.daos.Up.update(up).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.Up.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.Up.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.Up.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };

  return UpService;
};