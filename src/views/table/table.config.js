angular.module('app.table').config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider.state('app.table', {
		url: 'table',
		template: ''
	});
}
