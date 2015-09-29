'use strict';

angular.module('htc.services')

.factory('userService', ['$http', 'routerService', function ($http, routerService) {
	return {
		createUser: function (user, cb) {
			$http.post(routerService.createUserUrl, user).then(function (response) {
				console.log(response);
				cb(response);
			});
		}
	};
}]);