'use strict';

module.exports = function (app) {

  var AbuseService = {
    create: function (abuse) {
      return app.daos.Abuse.create(abuse).then(function (data) {
        return data;
      });
    },
    update: function (abuse) {
      return app.daos.Abuse.update(abuse).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.Abuse.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.Abuse.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.Abuse.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };

  return AbuseService;
};