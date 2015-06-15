'use strict';

var sequelize = require('../models').sequelize;

var LocalizationDAO = {
  create: function (localization) {
    return sequelize.query('INSERT INTO localization(latitude, longitude, precision) VALUES (?, ?, ?)', {
      replacements: [
        localization.latitude,
        localization.longitude,
        localization.precision
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (localization) {
      return localization;
    });
  },
  update: function (localization) {
    return sequelize.query('UPDATE localization SET latitude=?, longitude=?, precision=? WHERE id = ?', {
      replacements: [
        localization.latitude,
        localization.longitude,
        localization.precision,
        localization.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (localization) {
      return localization;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM localization WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM localization WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (localization) {
      return localization;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM localization', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (localizations) {
      return localizations;
    });
  }
};

module.exports = LocalizationDAO;