'use strict';

var sequelize = require('../models').sequelize;

module.exports = function (app) {

	var UserController = {
		create: function (req, res) {
			return sequelize.transaction(function (t) {
				console.log(req.body.user.password);
				return app.services.User.create(req.body.user).then(function (result) {
					return result;
				});
			}).then(function (result) {
				res.json(result);
			});
		},
		update: function (req, res) {
			req.body.user.id = req.params.id;
			app.services.User.update(req.body.user).then(function (result) {
				res.json(result);
			});
		},
		delete: function (req, res) {
			app.services.User.delete(req.params.id).then(function (result) {
				res.json(result);
			});
		},
		readById: function (req, res) {
			app.services.User.readById(req.params.id).then(function (result) {
				res.json(result);
			});
		},
		readByCriteria: function (req, res) {
			app.services.User.readByCriteria(req.query.criteria).then(function (result) {
				res.json(result);
			});
		}
	};

	return UserController;
};