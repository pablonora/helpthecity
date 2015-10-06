'use strict';

var app = angular.module('htc', ['ionic', 'htc.controllers', 'htc.services']);

// Define all angular modules that will be used to get them in other files
angular.module('htc.controllers', []);
angular.module('htc.services', []);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
});

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.defaults.withCredentials = true;

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.

  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('home', {
    url: '/home',
    views: {
      'home': {
        templateUrl: 'templates/home.html',
        controller: 'homeController',
        controllerAs: 'homeCtrl'
      }
    }
  })

  .state('login', {
      url: '/login',
      views: {
        'home': {
          templateUrl: 'templates/login.html',
          controller: 'homeController',
          controllerAs: 'homeCtrl'
        }
      }
    })
    /*===Register User===*/
    .state('registerUser', {
      url: '/registerUser',
      views: {
        'home': {
          templateUrl: 'templates/registerUser.html',
          controller: 'userController',
          controllerAs: 'userCtrl'
        }
      }
    })
    /*===List of Reports===*/
    .state('tab.listOfReports', {
      url: '/listOfReports',
      views: {
        'tab-listOfReports': {
          templateUrl: 'templates/tab-listOfReports.html',
          controller: 'reportController',
          controllerAs: 'homeCtrl'
        }
      }
    })
    /*===Search===*/
    .state('tab.search', {
      url: '/search',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-search.html',
          controller: 'reportController',
          controllerAs: 'homeCtrl'
        }
      }
    })
    /*===Register Report===*/
    .state('tab.report', {
      url: '/report',
      views: {
        'tab-report': {
          templateUrl: 'templates/tab-report.html',
          controller: 'reportController',
          controllerAs: 'reportCtrl'
        }
      }
    })
    /*===Edit Profile===*/
    .state('tab.editProfile', {
      url: '/editProfile',
      views: {
        'tab-editProfile': {
          templateUrl: 'templates/tab-editProfile.html',
          controller: 'userController',
          controllerAs: 'userCtrl'
        }
      }
    })
    /*===Abuse===*/
    .state('abuse', {
      url: '/abuse',
      templateUrl: 'templates/tab-abuse.html',
      controller: 'reportController',
      controllerAs: 'homeCtrl'
    })
     /*===Map===*/
    .state('map', {
      url: '/map',
      templateUrl: 'templates/tab-map.html',
      controller: 'reportController',
      controllerAs: 'reportCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

}]);

app.config(function ($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(10);
  $ionicConfigProvider.backButton.text('').icon('ion-chevron-left').previousTitleText(false);
});