'use strict';

angular.module('htc.controllers')

.controller('showReportController', ['$scope', '$http', '$routeParams', '$location', 'routerService', function ($scope, $http, $routeParams, $location, routerService) {
  $scope.image = '';
  $scope.date = '';
  $scope.description = '';
  $scope.latitude = '';
  $scope.longitude = '';
  $scope.reportCategoryId = '';
  $scope.precision = '';
  $scope.userId = '';
  $scope.id = $routeParams.id;
  $scope.reportCategories = [];

  $http.get(routerService.getReportUrl + $scope.id).then(function (report) {
    console.log(report);
    $scope.image = report.data.image;
    $scope.date = report.data.date;
    $scope.description = report.data.description;
    $scope.latitude = report.data.latitude;
    $scope.longitude = report.data.longitude;
    $scope.userId = report.data.userId;
    $scope.precision = report.data.precision;
    $scope.reportCategoryId = report.data.reportCategoryId.toString();

    $http.get(routerService.getUserUrl + report.data.userId).then(function (user) {
      $scope.username = user.data.name;
    });
  });

  $http.get(routerService.getListReportCategoryUrl + '?criteria=null').then(function (reportCategories) {
    $scope.reportCategories = reportCategories.data;
  });

  $scope.deleteReport = function () {
    $http.delete(routerService.deleteReportUrl + $scope.id).then(function (response) {
      $location.path('/report');
      console.log(response);
    }, function (response) {
      console.log(response);
    });
  };

  $scope.updateReport = function () {
    var data = {
      report: {
        image: $scope.image,
        date: $scope.date,
        description: $scope.description,
        latitude: $scope.latitude,
        longitude: $scope.longitude,
        precision: $scope.precision,
        reportCategoryId: $scope.reportCategoryId,
        userId: $scope.userId
      }
    };


    $http.put(routerService.updateReportUrl + $scope.id, JSON.stringify(data)).then(function (response) {
      console.log(response);
      $location.path('/report');
    }, function (response) {
      console.log(response);
    });
  };

}]);