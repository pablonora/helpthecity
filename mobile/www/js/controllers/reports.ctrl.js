'use strict';

angular.module('htc.controllers')

.controller('reportsController', ['$scope', 'reportService', function ($scope, reportService) {
	$scope.reports = reportService.getReports();
}]);