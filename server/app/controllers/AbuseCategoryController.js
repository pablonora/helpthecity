'use strict';

module.exports = function (app) {

	var AbuseCategoryController = {
		create: function (req, res) {
			app.services.AbuseCategory.create(req.body.abuseCategory).then(function (result) {
				res.json(result);
			});
		},
		update: function (req, res) {
			req.body.abuseCategory.id = req.params.id;
			app.services.AbuseCategory.update(req.body.abuseCategory).then(function (result) {
				res.json(result);
			});
		},
		delete: function (req, res) {
			app.services.AbuseCategory.delete(req.params.id).then(function (result) {
				res.json(result);
			});
		},
		readById: function (req, res) {
			app.services.AbuseCategory.readById(req.params.id).then(function (result) {
				res.json(result);
			});
		},
		readByCriteria: function (req, res) {
			app.services.AbuseCategory.readByCriteria(req.query).then(function (result) {
				res.json(result);
			});
		}
	};

	return AbuseCategoryController;
};