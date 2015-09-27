'use strict';

angular.module('htc.controllers')

.controller('homeController', ['$scope', '$http', 'routerService', 'localStorageService', function ($scope, $http, routerService, localStorageService) {
	$scope.email = '';
	$scope.password = '';

	$scope.isLoggedIn = function () {
		if (localStorageService.get('user')) return true;
		else return false;
	};

	$scope.login = function (email, password) {
		var data = {
			email: email,
			password: password
		};

		$http.post(routerService.loginUrl, JSON.stringify(data)).then(function (response) {
			console.log('successfully authenticated');
			console.log(response);
		}, function (response) {
			console.log(response);
		});
	};
}]);