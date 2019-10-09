angular.module('app').config(config);

config.$inject = ['$stateProvider', '$locationProvider', '$urlServiceProvider', '$urlRouterProvider'];
function config($stateProvider, $locationProvider, $urlServiceProvider, $urlRouterProvider) {
	$locationProvider.html5Mode({ enabled: true, requireBase: process.env.NODE_ENV !== 'karma' });
	$locationProvider.hashPrefix('!');

	$stateProvider.state('app', {
		abstract: true,
		url: '/'
	});

	if (process.env.NODE_ENV !== 'karma') {
		$urlRouterProvider.otherwise('/home');
	}

	$urlServiceProvider.deferIntercept();
}
