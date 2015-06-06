'use strict';

var sequelize = require('../models').sequelize;

var OcorrenciaDAO= {
  create: function (model) {
    return sequelize.query('INSERT INTO ocorrencia(data, descricao, imagem, categoria_ocorrencia_fk, localizacao_fk, usuario_fk) VALUES (?, ?, ?, ?, ?, ?)', {
      replacements: [
        model.data,
        model.descricao,
        model.imagem,
        model.categoria_ocorrencia_id,
        model.localizacao_id,
        model.usuario_id
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (model) {
      return model;
    });
  },
  update: function (model) {
    return sequelize.query('UPDATE ocorrencia SET data=?, descricao=?, imagem=?, categoria_ocorrencia_fk=?, localizacao_fk=?, usuario_fk=? WHERE id = ?', {
      replacements: [
        model.data,
        model.descricao,
        model.imagem,
        model.categoria_ocorrencia_id,
        model.localizacao_id,
        model.usuario_id,
        model.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (model) {
      return model;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM ocorrencia WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM ocorrencia WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (model) {
      return model;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM ocorrencia', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (models) {
      return models;
    });
  }
};

module.exports = OcorrenciaDAO;