window.angular.module('app.react-views', []).config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider.state('app.reactTable', {
		url: 'react-table',
		template: '' // Empty template because it's a sink route
	});
}
