'use strict';

module.exports = function (app) {

	var AbuseService = {
		create: function (abuse) {
			return app.daos.Abuse.create(abuse).then(function (id) {
				return id;
			});
		},
		update: function (abuse) {
			return app.daos.Abuse.update(abuse).then(function (id) {
				return id;
			});
		},
		delete: function (id) {
			return app.daos.Abuse.delete(id).then(function (ok) {
				return ok;
			});
		},
		readById: function (id) {
			return app.daos.Abuse.readById(id).then(function (abuse) {
				return abuse;
			});
		},
		readByCriteria: function (criteria) {
			return app.daos.Abuse.readByCriteria(criteria).then(function (abuse) {
				return abuse;
			});
		}
	};

	return AbuseService;
};