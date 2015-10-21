'use strict';

var models = require('../models'),
	sequelize = models.sequelize,
	bcrypt = require('bcryptjs');

var UserDAO = {
	create: function (user) {
		return sequelize.query('INSERT INTO "user"(name, cpf, active, image, email, type, password, gender, "coverageRadius") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id', {
			replacements: [
				user.name,
				user.cpf,
        user.active,
        user.image,
        user.email,
        user.type,
        user.password,
        user.gender,
        user.coverageRadius
      ],
			type: sequelize.QueryTypes.INSERT,
			model: models.User
		}).then(function (id) {
			return id[0];
		}).catch(function (err) {
			return err.message;
		});
	},
	update: function (user) {
		var query = '',
			replacements = [];
		if (user.password == null) {
			query = 'UPDATE "user" SET name=?, active=?, image=?, email=?, type=?, gender=?, "coverageRadius"=? WHERE id = ? RETURNING id';
			replacements = [
				user.name,
        user.active,
        user.image,
        user.email,
        user.type,
        user.gender,
        user.coverageRadius,
        user.id
			];

			return sequelize.query(query, {
				replacements: replacements,
				type: sequelize.QueryTypes.UPDATE,
				model: models.User
			}).then(function (id) {
				return id[0];
			}).catch(function (err) {
				return err.message;
			});
		} else {
			bcrypt.compare(user.oldPassword, this.readUserWithPassword(user.id).password, function (err, res) {
				if (err) return 'An unexpected error has ocurred';
				if (!res) return 'Password doesn\'t match';
				query = 'UPDATE "user" SET name=?, active=?, image=?, email=?, type=?, password=?, gender=?, "coverageRadius"=? WHERE id = ? RETURNING id';
				replacements = [
					user.name,
					user.active,
					user.image,
					user.email,
					user.type,
					user.password,
					user.gender,
					user.coverageRadius,
					user.id
				];
			});

			return sequelize.query(query, {
				replacements: replacements,
				type: sequelize.QueryTypes.UPDATE,
				model: models.User
			}).then(function (id) {
				return id[0];
			}).catch(function (err) {
				return err.message;
			});
		}
	},
	delete: function (id) {
		return sequelize.query('DELETE FROM "user" WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.DELETE,
			model: models.User
		}).then(function (ok) {
			return ok[0];
		}).catch(function (err) {
			return err.message;
		});
	},
	readById: function (id) {
		return sequelize.query('SELECT * FROM "user" WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.SELECT,
			model: models.User
		}).then(function (user) {
			user.password = '';
			return user[0];
		}).catch(function (err) {
			return err.message;
		});
	},
	readByCriteria: function (criteria) {
		return sequelize.query(createQuery(criteria), {
			type: sequelize.QueryTypes.SELECT,
			model: models.User
		}).then(function (users) {
			if (users.length > 0) {
				users.forEach(function (user) {
					user.password = '';
				});
			}
			return users;
		}).catch(function (err) {
			return err.message;
		});
	},
	login: function (email) {
		return sequelize.query('SELECT * FROM "user" WHERE email = ?', {
			replacements: [email],
			type: sequelize.QueryTypes.SELECT,
			model: models.User
		}).then(function (user) {
			return user[0];
		}).catch(function (err) {
			return err.message;
		});
	},
	readUserWithPassword: function (id) {
		return sequelize.query('SELECT * FROM "user" WHERE id = ?', {
			replacements: [id],
			type: sequelize.QueryTypes.SELECT,
			model: models.User
		}).then(function (user) {
			return user[0];
		}).catch(function (err) {
			return err.message;
		})
	}
};

module.exports = UserDAO;

function createQuery(criteria) {
	var query = 'SELECT * FROM "user" WHERE 1=1';
	if (criteria) {
		if (criteria.name) {
			query += ' AND name = \'' + criteria.name + '\'';
		}
		if (criteria.cpf) {
			query += ' AND cpf = \'' + criteria.cpf + '\'';
		}
		if (criteria.active) {
			query += ' AND active = \'' + criteria.active + '\'';
		}
		if (criteria.image) {
			query += ' AND image = ' + criteria.image;
		}
		if (criteria.email) {
			query += ' AND email = \'' + criteria.email + '\'';
		}
		if (criteria.type) {
			query += ' AND type = \'' + criteria.type + '\'';
		}
		if (criteria.password) {
			query += ' AND password = \'' + criteria.password + '\'';
		}
		if (criteria.gender) {
			query += ' AND gender = \'' + criteria.gender + '\'';
		}
		if (criteria.coverageRadius) {
			query += ' AND coverageRadius = ' + criteria.coverageRadius;
		}
	}
	return query;
};