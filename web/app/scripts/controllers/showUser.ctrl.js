'use strict';

angular.module('htc.controllers')

.controller('showUserController', ['$scope', '$http', '$routeParams', '$location', 'routerService', function ($scope, $http, $routeParams, $location, routerService) {
  $scope.email = '';
  $scope.type = '';
  $scope.gender = '';
  $scope.name = '';
  $scope.image = '';
  $scope.cpf = '';
  $scope.coverageRadius = '';
  $scope.active = '';
  $scope.id = $routeParams.id;

  $http.get(routerService.getUserUrl + $scope.id).then(function (user) {
    $scope.email = user.data.email;
    $scope.type = user.data.type;
    $scope.gender = user.data.gender;
    $scope.name = user.data.name;
    $scope.image = user.data.image;
    $scope.cpf = user.data.cpf;
    $scope.id = user.data.id;
    $scope.coverageRadius = user.data.coverageRadius;
    $scope.active = user.data.active;
    console.log(user);
  });

  $scope.deleteUser = function () {
    $http.delete(routerService.deleteUserUrl + $scope.id).then(function (response) {
      $location.path('/user');
      console.log(response);
    }, function (response) {
      console.log(response);
    });
  };

  $scope.updateUser = function () {
    var data = {
      user: {
        image: $scope.image,
        email: $scope.email,
        name: $scope.name,
        gender: $scope.gender,
        type: $scope.type,
        cpf: $scope.cpf,
        coverageRadius: $scope.coverageRadius,
        active: $scope.active

      }
    };

    $http.put(routerService.updateUserUrl + $scope.id, JSON.stringify(data)).then(function (response) {
      console.log(response);
      $location.path('/user');
    }, function (response) {
      console.log(response);
    });
  };

}]);