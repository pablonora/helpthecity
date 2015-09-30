'use strict';

var models = require('../models'),
	sequelize = models.sequelize;

var AbuseCategoryDAO = {
	create: function (abuseCategory) {
		return sequelize.query('INSERT INTO "abuseCategory"(name, description) VALUES (?, ?) RETURNING id', {
			replacements: [
        abuseCategory.name,
        abuseCategory.description
      ],
			type: sequelize.QueryTypes.INSERT,
			model: models.AbuseCategory,
		}).then(function (id) {
			return id[0];
		}).catch(function (err) {
			return err.message;
		});
	},
	update: function (abuseCategory) {
		return sequelize.query('UPDATE "abuseCategory" SET name=?, description=? WHERE id = ? RETURNING id', {
			replacements: [
        abuseCategory.name,
        abuseCategory.description,
        abuseCategory.id
      ],
			type: sequelize.QueryTypes.UPDATE,
			model: models.AbuseCategory
		}).then(function (id) {
			return id[0];
		}).catch(function (err) {
			return err.message;
		});
	},
	delete: function (id) {
		return sequelize.query('DELETE FROM "abuseCategory" WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.DELETE,
			model: models.AbuseCategory
		}).then(function (ok) {
			return ok[0];
		}).catch(function (err) {
			return err.message;
		});
	},
	readById: function (id) {
		return sequelize.query('SELECT * FROM "abuseCategory" WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.SELECT,
			model: models.AbuseCategory
		}).then(function (abuseCategory) {
			return abuseCategory[0];
		}).catch(function (err) {
			return err.message;
		});
	},
	readByCriteria: function (criteria) {
		return sequelize.query(createQuery(criteria), {
			type: sequelize.QueryTypes.SELECT,
			model: models.AbuseCategory
		}).then(function (abuseCategories) {
			return abuseCategories;
		}).catch(function (err) {
			return err.message;
		});
	}
};

module.exports = AbuseCategoryDAO;

function createQuery(criteria) {
	var query = 'SELECT * FROM "abuseCategory" WHERE 1=1';
	if (criteria.name) {
		query += ' AND name = \'' + criteria.name + '\'';
	}
	if (criteria.description) {
		query += ' AND description = \'' + criteria.description + '\'';
	}
	return query;
};