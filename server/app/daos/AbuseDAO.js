'use strict';

var sequelize = require('../models').sequelize;

var AbuseDAO = {
  create: function (abuse) {
    return sequelize.query('INSERT INTO abuse(comment, user_fk, abuse_category_fk) VALUES (?, ?, ?)', {
      replacements: [
        abuse.comment,
        abuse.user_id,
        abuse.abuse_category_id
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (abuse) {
      return abuse;
    });
  },
  update: function (abuse) {
    return sequelize.query('UPDATE abuse SET comment=?, user_fk=?, abuse_category_fk=? WHERE id = ?', {
      replacements: [
        abuse.comment,
        abuse.user_id,
        abuse.abuse_category_id,
        abuse.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (abuse) {
      return abuse;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM abuse WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM abuse WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (abuse) {
      return abuse;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM abuse', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (abuses) {
      return abuses;
    });
  }
};

module.exports = AbuseDAO;