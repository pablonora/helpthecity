'use strict';

angular.module('htc.services')

.factory('userService', ['$http', 'routerService', function ($http, routerService) {
	var _login = function (data, cb, err) {
			$http.post(routerService.loginUrl, JSON.stringify(data)).then(function (response) {
				cb(response.data);
			}, function (response) {
				if (err) err(response.data);
			});
		},
		_createUser = function (data, cb, err) {
			$http.post(routerService.createUserUrl, JSON.stringify(data)).then(function (response) {
				cb(response.data);
			}, function (response) {
				if (err) err(response.data);
			});
		},
		_getUser = function (id, cb, err) {
			$http.get(routerService.getUserUrl + id).then(function (response) {
				cb(response.data);
			}, function (response) {
				if (err) err(response.data);
			});
		};

	return {
		login: _login,
		createUser: _createUser,
		getUser: _getUser
	}
}]);