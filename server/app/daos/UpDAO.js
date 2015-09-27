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
		}).catch(function (err) {
			return err.message;
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
		}).catch(function (err) {
			return err.message;
		});
	},
	delete: function (id) {
		return sequelize.query('DELETE FROM up WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.DELETE,
			model: models.Up
		}).then(function (ok) {
			return ok;
		}).catch(function (err) {
			return err.message;
		});
	},
	readById: function (id) {
		return sequelize.query('SELECT * FROM up WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.SELECT,
			model: models.Up
		}).then(function (up) {
			return up[0];
		}).catch(function (err) {
			return err.message;
		});
	},
	readByCriteria: function (criteria) {
		return sequelize.query(createQuery(criteria), {
			type: sequelize.QueryTypes.SELECT,
			model: models.Up
		}).then(function (ups) {
			return ups;
		}).catch(function (err) {
			return err.message;
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