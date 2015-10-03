'use strict';

angular.module('htc.services')

.factory('routerService', function () {
  var baseURL = 'http://192.168.5.224:5000/htc/api/';

  return {
    loginUrl: baseURL + 'login',
    createUserUrl: baseURL + 'user',
    getUserUrl: baseURL + 'user',
    getListOfReports: baseURL + 'report'
  };
});