'use strict';

angular.module('htc.services')

.factory('routerService', function () {
  var baseURL = 'http://192.168.0.107:5000/htc/api/';

  return {
    /*Abuse*/
    createAbuseUrl: baseURL + 'abuse',
    
		/*Abuse Category*/
    readAbuseCategoriesUrl: baseURL + 'abuseCategory/',
    
		/*Login*/
    loginUrl: baseURL + 'login',
   
    /*Report*/
    createReportUrl: baseURL + 'report',
    getListOfReportsWithUser: baseURL + 'reportsWithUsers',
    getReportById: baseURL + 'report/',
    
		/*User*/
    createUserUrl: baseURL + 'user',
    getUserUrl: baseURL + 'user/',
    updateUserUrl: baseURL + 'user/',
		
		/*Up*/
		increaseRelevance: baseURL + 'up',
		decreaseRelevance: baseURL + 'up/',
		getRelevance: baseURL + 'up/',
  };
});