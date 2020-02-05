import { history } from './app/services/history';

window.angular
	.module('app')
	.config(config)
	.run(run);

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
function config($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.html5Mode({ enabled: true, requireBase: process.env.NODE_ENV !== 'karma' });
	$locationProvider.hashPrefix('!');

	$stateProvider.state('app', {
		abstract: true,
		url: '/'
	});

	if (process.env.NODE_ENV !== 'karma') {
		$urlRouterProvider.otherwise('/home');
	}
}

run.$inject = ['$rootScope', '$urlMatcherFactory', '$urlRouter'];
function run($rootScope) {
	// Need to monitor route changes inside AngularJS so react-router can be updated
	$rootScope.$on('$locationChangeSuccess', (event, newUrl, oldUrl) => {
		if (oldUrl !== newUrl) {
			const url = newUrl.replace(/^(http[s]?:\/\/)?[^/]+/, '');
			history.replace(url);
		}
	});
}
