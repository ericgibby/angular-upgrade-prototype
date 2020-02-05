import { getTableData } from '../../app/services/api';

window.angular.module('services.api').service('ApiService', ApiService);

ApiService.$inject = ['$timeout'];
function ApiService($timeout) {
	// Wrap in $timeout to keep it in the digest cycle
	this.getTableData = () => $timeout(() => getTableData().toPromise());
}
