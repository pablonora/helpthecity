'use strict';

angular.module('htc.controllers')

.controller('abuseController', ['$scope', '$http', 'routerService', function ($scope, $http, routerService) {
  $scope.abuses = [];
  $http.get(routerService.getListAbuseUrl + '?criteria=null').then(function (abuses) {
    $scope.abuses = abuses.data;
    console.log(abuses);
  });
}]);