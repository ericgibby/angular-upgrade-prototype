angular.module('app.table').config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider.state('app.oldTable', {
		url: 'old-table',
		controller: 'TableController',
		controllerAs: '$ctrl',
		bindToController: true,
		templateUrl: 'views/table/table.html'
	});
}
