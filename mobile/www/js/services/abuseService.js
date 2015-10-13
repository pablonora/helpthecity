'use strict';

angular.module('htc.services')

.factory('abuseService', ['$http', 'routerService', function ($http, routerService) {
  return {
    createAbuse: function (data, cb, err) {
      console.log(data);
      $http.post(routerService.createAbuseUrl, JSON.stringify(data)).then(function (response) {
        console.log(response);
        cb(response);
      }, function (response) {
				if(err) err(response.data);
			});
    }
  }
}]);