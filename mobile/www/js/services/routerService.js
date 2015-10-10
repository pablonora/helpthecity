'use strict';

angular.module('htc.services')

.factory('routerService', function () {
  var baseURL = 'http://192.168.4.115:5000/htc/api/';

  return {
    loginUrl: baseURL + 'login',
    
    createAbuseUrl: baseURL + 'abuse',

    createUserUrl: baseURL + 'user',
    getUserUrl: baseURL + 'user/',
    updateUserUrl: baseURL + 'user/',

    createReportUrl: baseURL + 'report',
    getListOfReports: baseURL + 'report'
  };
});