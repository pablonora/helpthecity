'use strict';

module.exports = function (app) {

	var ReportService = {
		create: function (report) {
			return app.daos.Report.create(report).then(function (id) {
				return id;
			});
		},
		update: function (report) {
			return app.daos.Report.update(report).then(function (id) {
				return id;
			});
		},
		delete: function (id) {
			return app.daos.Report.delete(id).then(function (ok) {
				return ok;
			});
		},
		readById: function (id) {
			return app.daos.Report.readById(id).then(function (report) {
				return report;
			});
		},
		readByCriteria: function (criteria) {
			return app.daos.Report.readByCriteria(criteria).then(function (reports) {
				return reports;
			});
		},
		readAllWithUsers: function () {
			return app.daos.Report.readAllWithUsers().then(function (reports) {
				return reports;
			});
		},
	};

	return ReportService;
};