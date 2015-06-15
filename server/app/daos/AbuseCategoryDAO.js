'use strict';

var sequelize = require('../models').sequelize;

var AbuseCategoryDAO = {
  create: function (abuseCategory) {
    return sequelize.query('INSERT INTO abuse_category(name, description) VALUES (?, ?)', {
      replacements: [
        abuseCategory.name,
        abuseCategory.description
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (abuseCategory) {
      return abuseCategory;
    });
  },
  update: function (abuseCategory) {
    return sequelize.query('UPDATE abuse_category SET name=?, description=? WHERE id = ?', {
      replacements: [
        abuseCategory.name,
        abuseCategory.description,
        abuseCategory.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (abuseCategory) {
      return abuseCategory;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM abuse_category WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM abuse_category WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (abuseCategory) {
      return abuseCategory;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM abuse_category', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (abuseCategories) {
      return abuseCategories;
    });
  }
};

module.exports = AbuseCategoryDAO;