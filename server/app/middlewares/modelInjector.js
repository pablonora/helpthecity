'use strict';

var models = require('../models'),
	Q = require('q'),
	Abuse = models.Abuse,
	AbuseCategory = models.AbuseCategory,
	Report = models.Report,
	ReportCategory = models.ReportCategory,
	Up = models.Up,
	User = models.User;

module.exports = function (req, res, next) {
	analyseRequest(req.body, next);
};

var analyseRequest = function (body, callback) {
	searchForAbuses(body)
		.then(searchForAbuseCategories(body))
		.then(searchForReports(body))
		.then(searchForReportCategories(body))
		.then(searchForUps(body))
		.then(searchForUsers(body))
		.then(callback());
};

function searchForAbuses(req) {
	var deffered = Q.defer();
	if (req.abuse || req.abuses) {
		if (req.abuse) {
			req.abuse = createAbuse(req.abuse);
			deffered.resolve();
		} else {
			req.abuses.forEach(function (abuse) {
				abuse = createAbuse(abuse);
			}).then(function () {
				deffered.resolve();
			});
		}
	} else {
		deffered.resolve();
	}
	return deffered.promise;
};

function searchForAbuseCategories(req) {
	var deffered = Q.defer();
	if (req.abuseCategory || req.abuseCategories) {
		if (req.abuseCategory) {
			req.abuseCategory = createAbuseCategory(req.abuseCategory);
			deffered.resolve();
		} else {
			req.abuseCategories.forEach(function (abuseCategory) {
				abuseCategory = createAbuseCategory(abuseCategory);
			}).then(function () {
				deffered.resolve();
			});
		}
	} else {
		deffered.resolve();
	}
	return deffered.promise;
};

function searchForReports(req) {
	var deffered = Q.defer();
	if (req.report || req.reports) {
		if (req.report) {
			req.report = createReport(req.report);
			deffered.resolve();
		} else {
			req.reports.forEach(function (report) {
				report = createReport(report);
			}).then(function () {
				deffered.resolve();
			});
		}
	} else {
		deffered.resolve();
	}
	return deffered.promise;
};

function searchForReportCategories(req) {
	var deffered = Q.defer();
	if (req.reportCategory || req.reportCategories) {
		if (req.reportCategory) {
			req.reportCategory = createReportCategory(req.reportCategory);
			deffered.resolve();
		} else {
			req.reportCategories.forEach(function (reportCategory) {
				reportCategory = createReportCategory(reportCategory);
			}).then(function () {
				deffered.resolve();
			});
		}
	} else {
		deffered.resolve();
	}
	return deffered.promise;
};

function searchForUps(req) {
	var deffered = Q.defer();
	if (req.up || req.ups) {
		if (req.up) {
			req.up = createUp(req.up);
			deffered.resolve();
		} else {
			req.ups.forEach(function (up) {
				up = createUp(up);
			}).then(function () {
				deffered.resolve();
			});
		}
	} else {
		deffered.resolve();
	}
	return deffered.promise;
};

function searchForUsers(req) {
	var deffered = Q.defer();
	if (req.user || req.users) {
		if (req.user) {
			req.user = createUser(req.user);
			deffered.resolve();
		} else {
			req.users.forEach(function (user) {
				user = createUser(user);
			}).then(function () {
				deffered.resolve();
			});
		}
	} else {
		deffered.resolve();
	}
	return deffered.promise;
};

function createAbuse(abuse) {
	var model = Abuse.build({
		id: abuse.id,
		abuseCategoryId: abuse.abuseCategoryId,
		userId: abuse.userId,
		comment: abuse.comment
	});
	return model;
};

function createAbuseCategory(abuseCategory) {
	var model = AbuseCategory.build({
		id: abuseCategory.id,
		name: abuseCategory.name,
		description: abuseCategory.description
	});
	return model;
};

function createReport(report) {
	var model = Report.build({
		id: report.id,
		reportCategoryId: report.reportCategoryId,
		userId: report.userId,
		date: report.date,
		description: report.description,
		image: report.image,
		latitude: report.latitude,
		longitude: report.longitude,
		precision: report.precision
	});
	return model;
};

function createReportCategory(reportCategory) {
	var model = ReportCategory.build({
		id: reportCategory.id,
		name: reportCategory.name,
		description: reportCategory.description
	});
	return model;
};

function createUp(up) {
	var model = Up.build({
		id: up.id,
		userId: up.userId,
		reportId: up.reportId,
		date: up.date
	});
	return model;
};

function createUser(user) {
	var model = User.build({
		id: user.id,
		name: user.name,
		gender: user.gender,
		email: user.email,
		password: user.password,
		image: user.image,
		type: user.type,
		active: user.active,
		coverageRadius: user.coverageRadius
	});
	return model;
};