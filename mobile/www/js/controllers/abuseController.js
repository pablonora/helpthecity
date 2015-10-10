'use strict';

angular.module('htc.controllers')

.controller('abuseController', ['$scope', '$http', '$location', '$stateParams', 'abuseService', 'abuseCategoryService', function ($scope, $http, $location, $stateParams, abuseService, abuseCategoryService) {
  $scope.reportId = $stateParams.reportId;
  $scope.userId = $stateParams.userId;
  $scope.abuseCategoriesList = [];
  $scope.abuse= {};

  /*Get Abuse Category*/
  abuseCategoryService.readAbuseCategories(function (abuseCategoriesList) {
    $scope.abuseCategoriesList = abuseCategoriesList;
  });

  $scope.saveAbuse = function () {
    var data = {
      abuse: {
        description: $scope.abuse.description,
        date: Date.now() / 1000,
        userId: $scope.userId,
        abuseCategoryId: $scope.abuse.categoryId,
        reportId: $scope.reportId
      }
    };
    abuseService.createAbuse(data, function (response) {
      console.log(response);
      
    });
    alert('enviado');
    $location.path('/tab/listOfReports');
  };
}]);