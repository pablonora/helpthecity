'use strict';

angular.module('htc.services')

.factory('routerService', function () {
	var baseURL = '192.168.0.105:5000/htc/api/';
	
	return {
		loginUrl: baseURL + 'login',
		createUserUrl: baseURL + 'user',
		getUserUrl: baseURL + 'user'
	};
});