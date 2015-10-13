'use strict';

angular.module('htc.services')

.factory('userService', ['$http', 'routerService', function ($http, routerService) {
  return {
		login: function (data, cb, err) {
			$http.post(routerService.loginUrl, JSON.stringify(data)).then(function (response) {
				cb(response.data);
			}, function (response) {
				if(err) err(response.data);
			});
		},
    createUser: function (data, cb, err) {
      $http.post(routerService.createUserUrl, JSON.stringify(data)).then(function (response) {
        cb(response.data);
      }, function (response) {
				if(err) err(response.data);
			});
    },
		getUser: function (id, cb, err) {
			$http.get(routerService.getUserUrl + id).then(function (response) {
				cb(response.data);
			}, function (response) {
				if(err) err(response.data);
			});
		}
  }
}]);