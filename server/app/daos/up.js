'use strict';

var sequelize = require('../models').sequelize;

var UpDAO = {
  create: function (model) {
    return sequelize.query('INSERT INTO up(data, usuario_fk, ocorrencia_fk) VALUES (?, ?, ?)', {
      replacements: [
        model.data,
        model.usuario_id
      ]
    }).then(function (model) {
      return model;
    });
  },
  update: function (model) {
    return sequelize.query('UPDATE up SET data=?, usuario_fk=?, ocorrencia_fk=? WHERE usuario_fk = ? AND ocorrencia_fk = ?', {
      replacements: [
        model.data,
        model.usuario_id,
        model.ocorrencia_id,
        model.usuario_id,
        model.ocorrencia_id
      ]
    }).then(function (model) {
      return model;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM up WHERE id = ?', {
      replacements: [id]
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM up WHERE id = ?', {
      replacements: [id]
    }).then(function (model) {
      return model;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM up').then(function (models) {
      return models;
    });
  }
};

module.exports = UpDAO;