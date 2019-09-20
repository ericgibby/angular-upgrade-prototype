angular.module('app.home').config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider.state('app.home', {
		url: 'home',
		controller: 'HomeController',
		bindToController: true,
		controllerAs: '$ctrl',
		templateUrl: 'views/home/home.html'
	});
}
