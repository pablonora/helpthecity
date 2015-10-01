'use strict';

angular.module('htc.controllers')

.controller('reportController', ['$scope', '$http', 'routerService', function ($scope, $http, routerService) {
  $scope.reports = [];
  $http.get(routerService.getListReportUrl + '?criteria=null').then(function (reports) {
    $scope.reports = reports.data;
    console.log(reports.data);
  });
}]);