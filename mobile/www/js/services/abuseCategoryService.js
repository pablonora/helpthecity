'use strict';

angular.module('htc.services')

.factory('abuseCategoryService', ['$http', 'routerService', function ($http, routerService) {
  return {
    readAbuseCategories: function (cb) {
      $http.get(routerService.readAbuseCategoriesUrl).then(function (response) {
        cb(response.data);
      });
    }
  };
}]);