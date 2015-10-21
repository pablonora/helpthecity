'use strict';

var app = angular.module('htc', ['ionic', 'htc.controllers', 'htc.services', 'htc.directives', 'uiGmapgoogle-maps']);

// Define all angular modules that will be used to get them in other files
angular.module('htc.controllers', []);
angular.module('htc.services', []);
angular.module('htc.directives', []);

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

app.config(['$ionicConfigProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', function ($ionicConfigProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
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

  /*===Home===*/
  .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'homeController',
      controllerAs: 'homeCtrl',
      resolve: {
        alreadyAuthenticated: alreadyAuthenticated
      }
    })
    /*===Login===*/
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'homeController',
      controllerAs: 'homeCtrl',
      resolve: {
        alreadyAuthenticated: alreadyAuthenticated
      }
    })
    /*===Register User===*/
    .state('registerUser', {
      url: '/registerUser',
      templateUrl: 'templates/registerUser.html',
      controller: 'userController',
      controllerAs: 'userCtrl',
      resolve: {
        alreadyAuthenticated: alreadyAuthenticated
      }
    })
    /*===List of Reports===*/
    .state('tab.listOfReports', {
      url: '/listOfReports',
      views: {
        "tab-listOfReports": {
          templateUrl: 'templates/tab-listOfReports.html',
          controller: 'reportController',
          controllerAs: 'reportCtrl',
        }
      },
      resolve: {
        needAuth: needAuth
      }
    })
    /*===Search===*/
    .state('tab.search', {
      url: '/search',
      views: {
        "tab-search": {
          templateUrl: 'templates/tab-search.html',
          controller: 'reportController',
          controllerAs: 'homeCtrl',
        }
      },
      resolve: {
        needAuth: needAuth
      }
    })
    /*===Register Report===*/
    .state('tab.report', {
      url: '/report',
      views: {
        "tab-report": {
          templateUrl: 'templates/tab-report.html',
          controller: 'reportController',
          controllerAs: 'reportCtrl',
        }
      },
      resolve: {
        needAuth: needAuth
      }
    })
    /*===Edit Profile===*/
    .state('tab.editProfile', {
      url: '/editProfile',
      views: {
        "tab-editProfile": {
          templateUrl: 'templates/tab-editProfile.html',
          controller: 'userController',
          controllerAs: 'userCtrl',
        }
      },
      resolve: {
        needAuth: needAuth
      }
    })
    /*===Map===*/
    .state('tab.map', {
      url: '/map',
      views: {
        "tab-map": {
          templateUrl: 'templates/tab-map.html',
          controller: 'reportController',
          controllerAs: 'reportCtrl',
        }
      },
      resolve: {
        needAuth: needAuth
      }
    })
    /*===Abuse===*/
    .state('tab.listOfReports-abuse', {
      url: '/listOfReports/abuse?:userId?:reportId',
      views: {
        "tab-listOfReports": {
          templateUrl: 'templates/tab-abuse.html',
          controller: 'abuseController',
          controllerAs: 'abuseCtrl',
        }
      },
      resolve: {
        needAuth: needAuth
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

  $ionicConfigProvider.views.maxCache(10);
  $ionicConfigProvider.backButton.text('').icon('ion-chevron-left').previousTitleText(false);

  function needAuth($q, $state, $timeout, localStorageService) {
    if (localStorageService.checkLoggedIn()) {
      // Resolve the promise successfully
      return $q.when();
    } else {
      // The next bit of code is asynchronously tricky.

      $timeout(function () {
        // This code runs after the authentication promise has been rejected.
        // Go to the log-in page
        $state.go('home');
      })

      // Reject the authentication promise to prevent the state from loading
      return $q.reject();
    }
  };

  function alreadyAuthenticated($q, $state, $timeout, localStorageService) {
    if (!localStorageService.checkLoggedIn()) {
      // Resolve the promise successfully
      return $q.when();
    } else {
      // The next bit of code is asynchronously tricky.

      $timeout(function () {
        // This code runs after the authentication promise has been rejected.
        // Go to the log-in page
        $state.go('tab.listOfReports');
      })

      // Reject the authentication promise to prevent the state from loading
      return $q.reject();
    }
  }
}]);