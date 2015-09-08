'use strict';

angular.module('htc.controllers')

.controller('reportController', ['$scope', '$stateParams', 'reportService', function ($scope, $stateParams, reportService) {
	$scope.report = reportService.get($stateParams.reportId);
	$scope.relevance = function (report) {
		reportService.relevance(report);
	};
	$scope.postDate = function (report) {
		return reportService.getPostDate(report);
	};
}]);