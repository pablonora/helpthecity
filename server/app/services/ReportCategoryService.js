'use strict';

module.exports = function (app) {

	var ReportCategoryService = {
		create: function (reportCategory) {
			return app.daos.ReportCategory.create(reportCategory).then(function (id) {
				return id;
			});
		},
		update: function (reportCategory) {
			return app.daos.ReportCategory.update(reportCategory).then(function (id) {
				return id;
			});
		},
		delete: function (id) {
			return app.daos.ReportCategory.delete(id).then(function (ok) {
				return ok;
			});
		},
		readById: function (id) {
			return app.daos.ReportCategory.readById(id).then(function (reportCategory) {
				return reportCategory;
			});
		},
		readByCriteria: function (criteria) {
			return app.daos.ReportCategory.readByCriteria(criteria).then(function (reportCategory) {
				return reportCategory;
			});
		}
	};

	return ReportCategoryService;
};