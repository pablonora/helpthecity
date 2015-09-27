'use strict';

angular.module('htc.controllers')

.controller('userController', ['$scope', '$stateParams', 'userService', function ($scope, $stateParams, userService) {
	$scope.report = reportService.get($stateParams.reportId);
	$scope.relevance = function (report) {
		reportService.relevance(report);
	};
	$scope.postDate = function (report) {
		return reportService.getPostDate(report);
	};
}]);