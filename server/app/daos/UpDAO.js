'use strict';

var sequelize = require('../models').sequelize;

var UpDAO = {
  create: function (up) {
    return sequelize.query('INSERT INTO up(date, user_fk, report_fk) VALUES (?, ?, ?)', {
      replacements: [
        up.date,
        up.user_id
      ]
    }).then(function (up) {
      return up;
    });
  },
  update: function (up) {
    return sequelize.query('UPDATE up SET date=?, user_fk=?, report_fk=? WHERE user_fk = ? AND report_fk = ?', {
      replacements: [
        up.date,
        up.user_id,
        up.report_id,
        up.user_id,
        up.report_id
      ]
    }).then(function (up) {
      return up;
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
    }).then(function (up) {
      return up;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM up').then(function (ups) {
      return ups;
    });
  }
};

module.exports = UpDAO;