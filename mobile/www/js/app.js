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

app.config(function ($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	
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
	
	.state('register', {
		url: '/register',
		views: {
			'home': {
				templateUrl: 'templates/register.html',
				controller: 'homeController',
				controllerAs: 'homeCtrl'
			}
		}
	})

	.state('tab.reports', {
		url: '/reports',
		views: {
			'tab-reports': {
				templateUrl: 'templates/tab-reports.html',
				controller: 'reportsController',
				controllerAs: 'reportsCtrl'
			}
		}
	})

	.state('tab.report-detail', {
		url: '/reports/:reportId',
		views: {
			'tab-reports': {
				templateUrl: 'templates/tab-report-detail.html',
				controller: 'reportController',
				controllerAs: 'reportCtrl'
			}
		}
	})

	.state('tab.map', {
		url: '/map',
		views: {
			'tab-map': {
				templateUrl: 'templates/tab-map.html',
				controller: 'reportsController',
				controllerAs: 'reportsCtrl'
			}
		}
	})

	.state('tab.new', {
		url: '/new',
		views: {
			'tab-new': {
				templateUrl: 'templates/tab-new.html',
				controller: 'reportsController',
				controllerAs: 'reportsCtrl'
			}
		}
	})

	.state('tab.profile', {
		url: '/profile',
		views: {
			'tab-profile': {
				templateUrl: 'templates/tab-profile.html',
				controller: 'userController',
				controllerAs: 'userCtrl'
			}
		}
	})

	.state('tab.settings', {
		url: '/settings',
		views: {
			'tab-settings': {
				templateUrl: 'templates/tab-settings.html',
				controller: 'userController',
				controllerAs: 'userCtrl'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/home');

});

app.config(function ($ionicConfigProvider) {
	$ionicConfigProvider.views.maxCache(10);
	$ionicConfigProvider.backButton.text('').icon('ion-chevron-left').previousTitleText(false);
});