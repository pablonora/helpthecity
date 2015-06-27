'use strict';

var models = require('../models'),
	sequelize = models.sequelize;

var ReportCategoryDAO = {
	create: function (reportCategory) {
		return sequelize.query('INSERT INTO "reportCategory"(name, description) VALUES (?, ?) RETURNING id', {
			replacements: [
        reportCategory.name,
        reportCategory.description
      ],
			type: sequelize.QueryTypes.INSERT,
			model: models.ReportCategoryDAO
		}).then(function (id) {
			return id;
		});
	},
	update: function (reportCategory) {
		return sequelize.query('UPDATE "reportCategory" SET name=?, description=? WHERE id = ? RETURNING id', {
			replacements: [
        reportCategory.name,
        reportCategory.description,
        reportCategory.id
      ],
			type: sequelize.QueryTypes.UPDATE,
			model: models.ReportCategoryDAO
		}).then(function (id) {
			return id;
		});
	},
	delete: function (id) {
		return sequelize.query('DELETE FROM "reportCategory" WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.DELETE,
			model: models.ReportCategoryDAO
		}).then(function (ok) {
			return ok;
		});
	},
	readById: function (id) {
		return sequelize.query('SELECT * FROM "reportCategory" WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.SELECT,
			model: models.ReportCategoryDAO
		}).then(function (reportCategory) {
			return reportCategory;
		});
	},
	readByCriteria: function (criteria) {
		return sequelize.query(createQuery(criteria), {
			type: sequelize.QueryTypes.SELECT,
			model: models.ReportCategoryDAO
		}).then(function (reportCategories) {
			return reportCategories;
		});
	}
};

module.exports = ReportCategoryDAO;

function createQuery(criteria) {
	var query = 'SELECT * FROM "reportCategory" WHERE 1=1';
	if (criteria.name) {
		query += ' AND name = \'' + criteria.name + '\'';
	}
	if (criteria.description) {
		query += ' AND "description" = \'' + criteria.description + '\'';
	}
	return query;
};