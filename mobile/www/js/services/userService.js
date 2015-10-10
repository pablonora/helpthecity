'use strict';

angular.module('htc.services')

.factory('userService', ['$http', 'routerService', function ($http, routerService) {
  return {
    createUser: function (data, cb) {
      console.log(data);
      $http.post(routerService.createUserUrl, JSON.stringify(data)).then(function (response) {
        cb(response.data);
      });
    }
  }
}]);