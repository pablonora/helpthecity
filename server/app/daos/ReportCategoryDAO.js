'use strict';

var sequelize = require('../models').sequelize;

var ReportCategoryDAO = {
  create: function (reportCategory) {
    return sequelize.query('INSERT INTO report_category(name, description) VALUES (?, ?)', {
      replacements: [
        reportCategory.name,
        reportCategory.description
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (reportCategory) {
      return reportCategory;
    });
  },
  update: function (reportCategory) {
    return sequelize.query('UPDATE report_category SET name=?, description=? WHERE id = ?', {
      replacements: [
        reportCategory.name,
        reportCategory.description,
        reportCategory.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (reportCategory) {
      return reportCategory;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM report_category WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM report_category WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (reportCategory) {
      return reportCategory;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM report_category', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (reportCategories) {
      return reportCategories;
    });
  }
};

module.exports = ReportCategoryDAO;