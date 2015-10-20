'use strict';

angular.module('htc.services')

.factory('localStorageService', ['$window', function ($window) {
	var _set = function (key, value) {
			$window.localStorage[key] = value;
		},
		_get = function (key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		},
		_setObject = function (key, value) {
			$window.localStorage[key] = JSON.stringify(value);
		},
		_getObject = function (key, defaulValue) {
			return JSON.parse($window.localStorage[key] || defaulValue);
		},
		_clear = function () {
			$window.localStorage.clear();
		},
		_checkLoggedIn = function () {
			return this.getObject('user', null) != null;
		};


	return {
		set: _set,
		get: _get,
		setObject: _setObject,
		getObject: _getObject,
		clear: _clear,
		checkLoggedIn: _checkLoggedIn
	};
}]);