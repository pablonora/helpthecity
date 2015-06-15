'use strict';

var sequelize = require('../models').sequelize;

var ReportDAO = {
  create: function (report) {
    return sequelize.query('INSERT INTO report(date, description, image, report_category_fk, localization_fk, user_fk) VALUES (?, ?, ?, ?, ?, ?)', {
      replacements: [
        report.date,
        report.description,
        report.image,
        report.report_category_id,
        report.localization_id,
        report.user_id
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (report) {
      return report;
    });
  },
  update: function (report) {
    return sequelize.query('UPDATE report SET date=?, description=?, image=?, report_category_fk=?, localization_fk=?, user_fk=? WHERE id = ?', {
      replacements: [
        report.date,
        report.description,
        report.image,
        report.report_category_id,
        report.localization_id,
        report.user_id,
        report.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (report) {
      return report;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM report WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM report WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (report) {
      return report;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM report', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (reports) {
      return reports;
    });
  }
};

module.exports = ReportDAO;