'use strict';

module.exports = function (app) {

  var LocalizationService = {
    create: function (localization) {
      return app.daos.Localization.create(localization).then(function (data) {
        return data;
      });
    },
    update: function (localization) {
      return app.daos.Localization.update(localization).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.Localization.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.Localization.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.Localization.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };

  return LocalizationService;
};