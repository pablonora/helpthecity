'use strict';

angular.module('htc.controllers')

.controller('homeController', ['$ionicHistory', '$scope', '$http', '$location', 'routerService', 'localStorageService', 'userService', 'popupService', function ($ionicHistory, $scope, $http, $location, routerService, localStorageService, userService, popupService) {
	$scope.user = {};

	$scope.login = function () {
		var data = {
			email: $scope.user.email,
			password: $scope.user.password
		};

		userService.login(data, function (user) {
			localStorageService.setObject('user', user);
			$location.path('/tab/listOfReports');
			//$ionicHistory.clearCache();
			//$ionicHistory.clearHistory();
		}, function (err) {
			if (err === '') {
				popupService.showAlert('O servidor está indisponível, tente novamente mais tarde');
			} else if (err === 'User not found') {
				popupService.showAlert('Usuário não cadastrado');
			} else if (err === 'Invalid password') {
				popupService.showAlert('Senha incorreta');
			}
		});
	};

	$scope.validate = function (form) {
		var result = true;
		form.submitted = true;
		if (!form.$valid) {
			if ($scope.user.email == null || $scope.user.email == '') {
				form.email.$setValidity('required', false);
				result = false;
			}
			if ($scope.user.password == null || $scope.user.password == '') {
				form.password.$setValidity('required', false);
				result = false;
			}
		}
		if (!result) {
			popupService.showAlert('Preencha os dados solicitados');
		}
		return result;
	};
}]);