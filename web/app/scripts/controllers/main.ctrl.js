'use strict';

angular.module('htc.controllers')

.controller('mainController', ['$scope', '$http', '$location', 'routerService', function ($scope, $http, $location, routerService) {
  $scope.email = '';
  $scope.password = '';

  $scope.login = function (email, password) {
    var data = {
      email: email,
      password: password
    };

    $http.post(routerService.loginUrl, JSON.stringify(data)).then(function (response) {
      console.log('successfully authenticated');
      console.log(response);
      $location.path('/home');
    }, function (response) {
      console.log(response);
    });
  };
}]);