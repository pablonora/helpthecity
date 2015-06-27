'use strict';

var models = require('../models'),
	sequelize = models.sequelize;

var UpDAO = {
	create: function (up) {
		return sequelize.query('INSERT INTO up(date, "userId", "reportId") VALUES (?, ?, ?) RETURNING id', {
			replacements: [
        up.date,
        up.userId,
				up.reportId
      ],
			type: sequelize.QueryTypes.INSERT,
			model: models.Up
		}).then(function (id) {
			return id;
		});
	},
	update: function (up) {
		return sequelize.query('UPDATE up SET date=?, "userId"=?, "reportId"=? WHERE "userId" = ? AND "reportId" = ? RETURNING id', {
			replacements: [
        up.date,
        up.userId,
        up.reportId,
        up.userId,
        up.reportId
      ],
			type: sequelize.QueryTypes.UPDATE,
			model: models.Up
		}).then(function (id) {
			return id;
		});
	},
	delete: function (id) {
		return sequelize.query('DELETE FROM up WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.DELETE,
			model: models.Up
		}).then(function (ok) {
			return ok;
		});
	},
	readById: function (id) {
		return sequelize.query('SELECT * FROM up WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.SELECT,
			model: models.Up
		}).then(function (up) {
			return up;
		});
	},
	readByCriteria: function (criteria) {
		return sequelize.query(createQuery(criteria), {
			replacements: ['1=1'],
			type: sequelize.QueryTypes.SELECT,
			model: models.Up
		}).then(function (ups) {
			return ups;
		});
	}
};

module.exports = UpDAO;

function createQuery(criteria) {
	var query = 'SELECT * FROM up WHERE 1=1';
	if (criteria.date) {
		query += ' AND date = \'' + criteria.date + '\'';
	}
	if (criteria.userId) {
		query += ' AND "userId" = ' + criteria.userId;
	}
	if (criteria.reportId) {
		query += ' AND "reportId" = ' + criteria.reportId;
	}
	return query;
};