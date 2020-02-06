import { getTableData as apiGetTableData } from '../../app/services/api';

window.angular.module('services.api').service('ApiService', ApiService);

ApiService.$inject = ['$timeout'];
function ApiService($timeout) {
	this.getTableData = getTableData;

	function getTableData() {
		// Wrap in $timeout to keep it in the digest cycle
		return $timeout(() => apiGetTableData().toPromise());
	}
}
