'use strict';

module.exports = function (app) {

	var UpService = {
		create: function (up) {
			return app.daos.Up.create(up).then(function (id) {
				return id;
			});
		},
		update: function (up) {
			return app.daos.Up.update(up).then(function (id) {
				return id;
			});
		},
		delete: function (userId, reportId) {
			return app.daos.Up.delete(userId, reportId).then(function (ok) {
				return ok;
			});
		},
		readById: function (userId, reportId) {
			return app.daos.Up.readById(userId, reportId).then(function (up) {
				return up;
			});
		},
		readByCriteria: function (criteria) {
			return app.daos.Up.readByCriteria(criteria).then(function (up) {
				return up;
			});
		}
	};

	return UpService;
};