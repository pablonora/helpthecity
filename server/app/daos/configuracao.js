'use strict';

var models = require('../models'),
    sequelize = models.sequelize;

var ConfiguracaoDAO = {
  create: function (configuracao) {
    return sequelize.query('INSERT INTO configuracao(raio_abrangencia) VALUES (?) RETURNING id', {
      replacements: [configuracao.raio_abrangencia],
      type: sequelize.QueryTypes.INSERT,
      model: models.Configuracao
    }).then(function (configuracao) {
      console.log(configuracao[0].id);
      return configuracao[0].id;
    });
  },
  update: function (configuracao) {
    return sequelize.query('UPDATE configuracao SET raio_abrangencia=? WHERE id = ?', {
      replacements: [
        configuracao.raio_abrangencia,
        configuracao.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (configuracao) {
      return configuracao;
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
    }).then(function (configuracao) {
      return configuracao;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM configuracao', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (configuracoes) {
      return configuracoes;
    });
  }
};

module.exports = ConfiguracaoDAO;