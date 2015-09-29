'use strict';

angular.module('htc.controllers')

.controller('userController', ['$scope', 'userService', function ($scope, userService) {
	$scope.user = {};

	$scope.createUser = function () {
		userService.createUser($scope.user, function (response) {									 
			console.log(response);
		});
	};

	$scope.getImage = function () {

	};
}]);