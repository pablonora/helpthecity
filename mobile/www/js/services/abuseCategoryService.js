'use strict';

angular.module('htc.services')

.factory('abuseCategoryService', ['$http', 'routerService', function ($http, routerService) {
  return {
    readAbuseCategories: function (cb, err) {
      $http.get(routerService.readAbuseCategoriesUrl).then(function (response) {
        cb(response.data);
      }, function (response) {
				if(err) err(response.data);
			});
    }
  };
}]);