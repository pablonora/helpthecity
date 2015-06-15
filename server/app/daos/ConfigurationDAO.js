'use strict';

var models = require('../models'),
  sequelize = models.sequelize;

var ConfigurationDAO = {
  create: function (configuration) {
    return sequelize.query('INSERT INTO configuration(coverage_radius) VALUES (?) RETURNING id', {
      replacements: [configuration.coverage_radius],
      type: sequelize.QueryTypes.INSERT,
      model: models.Configuration
    }).then(function (configuration) {
      console.log(configuration[0].id);
      return configuration[0].id;
    });
  },
  update: function (configuration) {
    return sequelize.query('UPDATE configuration SET coverage_radius=? WHERE id = ?', {
      replacements: [
        configuration.coverage_radius,
        configuration.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (configuration) {
      return configuration;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM configuration WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM configuration WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (configuration) {
      return configuration;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM configuration', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (configurations) {
      return configurations;
    });
  }
};

module.exports = ConfigurationDAO;