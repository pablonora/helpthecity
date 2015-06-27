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
		delete: function (id) {
			return app.daos.Up.delete(id).then(function (ok) {
				return ok;
			});
		},
		readById: function (id) {
			return app.daos.Up.readById(id).then(function (up) {
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