'use strict';

var models = require('../models'),
	sequelize = models.sequelize;

var AbuseDAO = {
	create: function (abuse) {
		return sequelize.query('INSERT INTO abuse(comment, userId, "abuseCategoryId") VALUES (?, ?, ?) RETURNING id', {
			replacements: [
        abuse.comment,
        abuse.userId,
        abuse.abuseCategoryId
      ],
			type: sequelize.QueryTypes.INSERT,
			model: models.Abuse
		}).then(function (id) {
			return id;
		}).catch(function (err) {
			return err.message;
		});
	},
	update: function (abuse) {
		return sequelize.query('UPDATE abuse SET comment=?, userId=?, "abuseCategoryId"=? WHERE id = ? RETURNING id', {
			replacements: [
        abuse.comment,
        abuse.userId,
        abuse.abuseCategoryId,
        abuse.id
      ],
			type: sequelize.QueryTypes.UPDATE,
			model: models.Abuse
		}).then(function (id) {
			return id;
		}).catch(function (err) {
			return err.message;
		});
	},
	delete: function (id) {
		return sequelize.query('DELETE FROM abuse WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.DELETE,
			model: models.Abuse
		}).then(function (ok) {
			return ok;
		}).catch(function (err) {
			return err.message;
		});
	},
	readById: function (id) {
		return sequelize.query('SELECT * FROM abuse WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.SELECT,
			model: models.Abuse
		}).then(function (abuse) {
			return abuse;
		}).catch(function (err) {
			return err.message;
		});
	},
	readByCriteria: function (criteria) {
		return sequelize.query(createQuery(criteria), {
			type: sequelize.QueryTypes.SELECT,
			model: models.Abuse
		}).then(function (abuses) {
			return abuses;
		}).catch(function (err) {
			return err.message;
		});
	}
};

module.exports = AbuseDAO;

function createQuery(criteria) {
	var query = 'SELECT * FROM abuse WHERE 1=1';
	if (criteria.comment) {
		query += ' AND comment = \'' + criteria.comment + '\'';
	}
	if (criteria.userId) {
		query += ' AND "userId" = ' + criteria.userId;
	}
	if (criteria.abuseCategoryId) {
		query += ' AND "abuseCategoryId" = ' + criteria.abuseCategoryId;
	}
	return query;
};