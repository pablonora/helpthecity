'use strict';

module.exports = function (app) {

	var AbuseCategoryService = {
		create: function (abuseCategory) {
			return app.daos.AbuseCategory.create(abuseCategory).then(function (id) {
				return id;
			});
		},
		update: function (abuseCategory) {
			return app.daos.AbuseCategory.update(abuseCategory).then(function (id) {
				return id;
			});
		},
		delete: function (id) {
			return app.daos.AbuseCategory.delete(id).then(function (ok) {
				return ok;
			});
		},
		readById: function (id) {
			return app.daos.AbuseCategory.readById(id).then(function (abuseCategory) {
				return abuseCategory;
			});
		},
		readByCriteria: function (criteria) {
			return app.daos.AbuseCategory.readByCriteria(criteria).then(function (abuseCategory) {
				return abuseCategory;
			});
		}
	};

	return AbuseCategoryService;
};