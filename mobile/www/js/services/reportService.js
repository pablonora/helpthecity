'use strict';

angular.module('htc.services')

.factory('reportService', ['$http', 'routerService', function ($http, routerService) {
	var reports = [],
		_createReport = function (report, cb, err) {
			$http.post(routerService.createReportUrl, JSON.stringify(report)).then(function (response) {
				cb(response.data);
			}, function (response) {
				if (err) err(response.data);
			});
		},
		_getListOfReportsWithUser = function (cb, err) {
			$http.get(routerService.getListOfReportsWithUser).then(function (response) {
				cb(response.data);
			}, function (response) {
				if (err) err(response.data);
			});
		},
		_get = function (reportId) {
			for (var i = 0; i < reports.length; i++) {
				if (reports[i].id === parseInt(reportId)) {
					return reports[i];
				}
			}
			return null;
		},
		_increaseRelevance = function (data, cb, err) {
			$http.post(routerService.increaseRelevance, JSON.stringify(data)).then(function (response) {
				cb(response.data);
			}, function (response) {
				if (err) err(response.data);
			});
		},
		_decreaseRelevance = function (userId, reportId, cb, err) {
			$http.delete(routerService.decreaseRelevance + '?userId=' + userId + '&reportId=' + reportId).then(function (response) {
				cb(response.data);
			}, function (response) {
				if (err) err(response.data);
			});
		},
		_getRelevance  = function (userId, reportId, cb, err) {
			$http.get(routerService.getRelevance + '?userId=' + userId + '&reportId=' + reportId).then(function (response) {
				cb(response.data);
			}, function (response) {
				if (err) err(response.data);
			});
		},
		_getPostDate = function (report) {
			var diff = new Date() - report.date;
			var milliseconds, seconds, minutes, hours, days, months, years;
			var result;

			diff = (diff - (milliseconds = diff % 1000)) / 1000;
			diff = (diff - (seconds = diff % 60)) / 60;
			diff = (diff - (minutes = diff % 60)) / 60;
			diff = (diff - (hours = diff % 24)) / 24;
			diff = (diff - (days = diff % 30)) / 30;
			years = (diff - (months = diff % 12)) / 12;

			if (years > 0) {
				result = years === 1 ? '1 ano' : years + ' anos';
			} else if (months > 0) {
				result = months === 1 ? '1 mes' : months + ' meses';
			} else if (days > 0) {
				result = days === 1 ? '1 dia' : days + ' dias';
			} else if (hours > 0) {
				result = hours === 1 ? '1 hora' : hours + ' horas';
			} else if (minutes > 0) {
				result = minutes === 1 ? '1 minuto' : minutes + ' minutos';
			} else if (seconds > 0) {
				result = seconds === 1 ? '1 segundo' : seconds + ' segundos';
			}

			return result;
		};

	return {
		createReport: _createReport,
		getListOfReportsWithUser: _getListOfReportsWithUser,
		get: _get,
		increaseRelevance: _increaseRelevance,
		decreaseRelevance: _decreaseRelevance,
		getRelevance: _getRelevance,
		getPostDate: _getPostDate
	};
}]);