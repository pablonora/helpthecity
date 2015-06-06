'use strict';

var sequelize = require('../models').sequelize;

var AbusoDAO = {
  create: function (model) {
    return sequelize.query('INSERT INTO abuso(comentario, usuario_fk, categoria_abuso_afk) VALUES (?, ?, ?)', {
      replacements: [
        model.comentario,
        model.usuario_id,
        model.categoria_abuso_id
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (model) {
      return model;
    });
  },
  update: function (model) {
    return sequelize.query('UPDATE abuso SET comentario=?, usuario_fk=?, categoria_abuso_afk=? WHERE id = ?', {
      replacements: [
        model.comentario,
        model.usuario_id,
        model.categoria_abuso_id,
        model.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (model) {
      return model;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM abuso WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM abuso WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (model) {
      return model;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM abuso', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (models) {
      return models;
    });
  }
};

module.exports = AbusoDAO;