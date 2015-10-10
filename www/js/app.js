// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
app = angular.module('starter', ['ionic']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
});

app.config(function ($stateProvider, $urlRouterProvider) {
	//User views
	$stateProvider
	.state('user', {
		url: '/user',
		abstract: true,
		templateUrl: 'user/templates/menu.html'
	})
	.state('user.home', {
		url: '/home',
		views: {
			'menuContent': {
				templateUrl: 'user/templates/home.html'
			}
		}
	})
	.state('user.profile', {
		url: '/profile',
		views: {
			'menuContent': {
				templateUrl: 'user/templates/profile.html',
				controller: 'ProfileCtrl'
			}
		}
	})
	.state('user.nearby', {
		url: '/nearby',
		views: {
			'menuContent': {
				templateUrl: 'user/templates/map.html',
				controller: 'MapCtrl'
			}
		}
	})
	.state('user.search', {
		url: '/search',
		views: {
			'menuContent': {
				templateUrl: 'user/templates/search.html'
			}
		}
	});

	//Professional views
	$stateProvider
	.state('pro', {
		url: '/pro',
		abstract: true,
		templateUrl: 'professional/templates/menu.html'
	})
	.state('pro.profile', {
		url: '/profile',
		views: {
			'menuContent': {
				templateUrl: 'professional/templates/profile.html',
				controller: 'ProfileCtrl'
			}
		}
	})
	.state('pro.calendar', {
		url: '/calendar',
		views: {
			'menuContent': {
				templateUrl: 'professional/templates/calendar.html',
				controller: 'CalendarCtrl'
			}
		}
	})
	.state('pro.appointment', {
		url: '/appointment',
		views: {
			'menuContent': {
				templateUrl: 'professional/templates/appointment.html',
				controller: 'AppointmentCtrl'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/user/home');
});
