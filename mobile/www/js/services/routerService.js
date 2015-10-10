'use strict';

angular.module('htc.services')

.factory('routerService', function () {
  var baseURL = 'http://192.168.4.115:5000/htc/api/';

  return {
    /*Abuse*/
    createAbuseUrl: baseURL + 'abuse',
    /*Abuse Category*/
    readAbuseCategoriesUrl: baseURL + 'abuseCategory/',
    /*Login*/
    loginUrl: baseURL + 'login',
    /*Report*/
    createReportUrl: baseURL + 'report',
    getListOfReports: baseURL + 'report',
    /*User*/
    createUserUrl: baseURL + 'user',
    getUserUrl: baseURL + 'user/',
    updateUserUrl: baseURL + 'user/'
  };
});