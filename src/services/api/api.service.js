angular.module('services.api').service('ApiService', ApiService);

ApiService.$inject = ['$http', 'URLS'];
function ApiService($http, URLS) {
	this.getTableData = getTableData;

	function getTableData() {
		return $http.get(URLS.api).then(({ data }) => data.users);
	}
}
