angular.module('app.table').config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider
		.state('app.table', {
			url: 'table',
			template: ''
		})
		.state('app.oldTable', {
			url: 'old-table',
			controller: 'TableController',
			bindToController: true,
			controllerAs: '$ctrl',
			templateUrl: 'views/table/table.html'
		});
}
