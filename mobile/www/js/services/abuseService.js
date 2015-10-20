'use strict';

angular.module('htc.services')

.factory('abuseService', ['$http', 'routerService', function ($http, routerService) {
	var _createAbuse = function (data, cb, err) {
		console.log(data);
		$http.post(routerService.createAbuseUrl, JSON.stringify(data)).then(function (response) {
			cb(response);
		}, function (response) {
			if (err) err(response.data);
		});
	};
	
	return {
		createAbuse: _createAbuse
	}
}]);