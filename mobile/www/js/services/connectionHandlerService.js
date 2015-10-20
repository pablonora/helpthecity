'use strict';

angular.module('htc.services')

.factory('connectionHandlerService', ['$ionicHistory', '$location', 'localStorageService', 'popupService', function ($ionicHistory, $location, localStorageService, popupService) {
	var _disconnect = function () {
		$location.path('/login');
		localStorageService.clear();
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		popupService.showAlert('Você foi desconectado. Conecte-se novamente!');
	};

	return {
		disconnect: _disconnect
	};
}]);