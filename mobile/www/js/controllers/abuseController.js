'use strict';

angular.module('htc.controllers')

.controller('abuseController', ['$scope', '$http', '$location', '$stateParams', 'routerService', function ($scope, $http, $location, $stateParams, routerService) {

  $scope.saveAbuse = function () {
    console.log('entrou no método');
    var data = {
      abuse: {
        description: 'teste',
        date: '',
        userId: 1,
        abuseCategory: 1,
        reportId: 1
      }
    };
    userService.createAbuse(data, function (response) {
      console.log(response);
    });
    alert('enviado');
    $location.path('/tab/listOfReports');
  };
}]);