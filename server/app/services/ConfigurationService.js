'use strict';

module.exports = function (app) {

  var ConfigurationService = {
    create: function (configuration) {
      console.log(configuration);
      return app.daos.Configuration.create(configuration).then(function (data) {
        return data;
      });
    },
    update: function (configuration) {
      return app.daos.Configuration.update(configuration).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.Configuration.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.Configuration.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.Configuration.readByCriteria(criteria).then(function (data) {
        return data;
      });
    }
  };

  return ConfigurationService;
};