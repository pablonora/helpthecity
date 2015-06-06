'use strict';

var sequelize = require('../models').sequelize;

var LocalizacaoDAO= {
  create: function (model) {
    return sequelize.query('INSERT INTO localizacao(latitude, longitude, precisao) VALUES (?, ?, ?)', {
      replacements: [
        model.latitude,
        model.longitude,
        model.precisao
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (model) {
      return model;
    });
  },
  update: function (model) {
    return sequelize.query('UPDATE localizacao SET latitude=?, longitude=?, precisao=? WHERE id = ?', {
      replacements: [
        model.latitude,
        model.longitude,
        model.precisao,
        model.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (model) {
      return model;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM localizacao WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM localizacao WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (model) {
      return model;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM localizacao', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (models) {
      return models;
    });
  }
};

module.exports = LocalizacaoDAO;