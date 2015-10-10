'use strict';

angular.module('htc.controllers')

.controller('userController', ['$scope', '$http', 'routerService', function ($scope, $http, routerService) {
  $scope.users = [];
  $http.get(routerService.getListUserUrl + '?criteria=null').then(function (users) {
    $scope.users = users.data;
    console.log(users.data);
  });
}]);