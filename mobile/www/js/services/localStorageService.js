'use strict';

angular.module('htc.services')

.factory('localStorageService', ['$window', function ($window) {
	return {
		set: function (key, value) {
			$window.localStorage[key] = value;
		},
		get: function (key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		},
		setObject: function (key, value) {
			$window.localStorage[key] = JSON.stringify(value);
		},
		getObject: function (key, defaulValue) {
			return JSON.parse($window.localStorage[key] || defaulValue);
		},
		clear: function () {
			$window.localStorage.clear();
		},
		checkLoggedIn: function () {
			return this.getObject('user', null) != null;
		}
	};
}]);