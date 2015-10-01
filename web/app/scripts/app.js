'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
var app = angular.module('htc', [
  'ngAnimate',
  'ngRoute',
  'htc.controllers',
  'htc.services'
]);

// Define all angular modules that will be used to get them in other files
angular.module('htc.controllers', []);
angular.module('htc.services', []);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
  $httpProvider.defaults.withCredentials = true;

  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'homeController',
      controllerAs: 'homeCtrl'
    })
    .when('/abuse', {
      templateUrl: 'views/abuse.html',
      controller: 'abuseController',
      controllerAs: 'abuseCtrl'
    })
    .when('/showAbuse/:id', {
      templateUrl: 'views/showAbuse.html',
      controller: 'showAbuseController',
      controllerAs: 'showAbuseCtrl'
    })
    .when('/user', {
      templateUrl: 'views/user.html',
      controller: 'userController',
      controllerAs: 'userCtrl'
    })
    .when('/showUser/:id', {
      templateUrl: 'views/showUser.html',
      controller: 'showUserController',
      controllerAs: 'showUserCtrl'
    })
    .when('/report', {
      templateUrl: 'views/report.html',
      controller: 'reportController',
      controllerAs: 'reportCtrl'
    })
    .when('/showReport/:id', {
      templateUrl: 'views/showReport.html',
      controller: 'showReportController',
      controllerAs: 'showReportCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);