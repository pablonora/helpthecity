'use strict';

angular.module('htc.controllers')

.controller('showAbuseController', ['$scope', '$http', '$routeParams', '$location', 'routerService', function ($scope, $http, $routeParams, $location, routerService) {
  $scope.description = '';
  $scope.abuseCategoryId = '';
  $scope.username = '';
  $scope.userId = '';
  $scope.reportId = '';
  $scope.date = '';
  $scope.id = $routeParams.id;
  $scope.abuseCategories = [];

  $http.get(routerService.getAbuseUrl + $scope.id).then(function (abuse) {
    console.log(abuse);
    $scope.description = abuse.data.description;
    $scope.abuseCategoryId = abuse.data.abuseCategoryId.toString();
    $scope.userId = abuse.data.userId;
    $scope.reportId = abuse.data.reportId;
    $scope.date = abuse.data.date;

    $http.get(routerService.getUserUrl + abuse.data.userId).then(function (user) {
      $scope.username = user.data.name;
    });

    $http.get(routerService.getListAbuseCategoryUrl + '?criteria=null').then(function (abuseCategories) {
      $scope.abuseCategories = abuseCategories.data;
    });
  });

  $scope.deleteAbuse = function () {
    $http.delete(routerService.deleteAbuseUrl + $scope.id).then(function (response) {
      $location.path('/abuse');
      console.log(response);
    }, function (response) {
      console.log(response);
    });
  };

  $scope.updateAbuse = function () {
    var data = {
      abuse: {
        abuseCategoryId: $scope.abuseCategoryId,
        date: $scope.date,
        description: $scope.description,
        reportId: $scope.reportId,
        userId: $scope.userId
      }
    };

    $http.put(routerService.updateAbuseUrl + $scope.id, JSON.stringify(data)).then(function (response) {
      console.log(response);
      $location.path('/abuse');
    }, function (response) {
      console.log(response);
    });
  };

}]);