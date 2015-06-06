'use strict';

var sequelize = require('../models').sequelize;

var CategoriaAbusoDAO = {
  create: function (model) {
    return sequelize.query('INSERT INTO categoria_abuso(nome, descricao) VALUES (?, ?)', {
      replacements: [
        model.nome,
        model.descricao
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (model) {
      return model;
    });
  },
  update: function (model) {
    return sequelize.query('UPDATE categoria_abuso SET nome=?, descricao=? WHERE id = ?', {
      replacements: [
        model.nome,
        model.descricao,
        model.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (model) {
      return model;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM categoria_abuso WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM categoria_abuso WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (model) {
      return model;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM categoria_abuso', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (models) {
      return models;
    });
  }
};

module.exports = CategoriaAbusoDAO;