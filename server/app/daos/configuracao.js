'use strict';

var sequelize = require('../models').sequelize;

var ConfiguracaoDAO = {
  create: function (model) {
    return sequelize.query('INSERT INTO configuracao(raio_abrangencia) VALUES (?)', {
      replacements: [model.raio_abrangencia],
      type: sequelize.QueryTypes.INSERT
    }).then(function (model) {
      return model;
    });
  },
  update: function (model) {
    return sequelize.query('UPDATE configuracao SET raio_abrangencia=? WHERE id = ?', {
      replacements: [
        model.raio_abrangencia,
        model.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (model) {
      return model;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM configuracao WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM configuracao WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (model) {
      return model;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM configuracao', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (models) {
      return models;
    });
  }
};

module.exports = ConfiguracaoDAO;