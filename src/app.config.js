angular.module('app').config(config);

config.$inject = ['$stateProvider', '$urlServiceProvider', '$urlRouterProvider'];
function config($stateProvider, $urlServiceProvider, $urlRouterProvider) {
	$stateProvider.state('app', {
		abstract: true,
		url: '/'
	});

	if (process.env.NODE_ENV !== 'karma') {
		$urlRouterProvider.otherwise('/home');
	}

	$urlServiceProvider.deferIntercept();
}
