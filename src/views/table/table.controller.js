window.angular.module('app.table').controller('TableController', TableController);

TableController.$inject = ['$log', 'ApiService'];
function TableController($log, ApiService) {
	const $ctrl = this;

	// Model
	$ctrl.data = [];
	$ctrl.loading = false;

	activate();

	////////////////////

	function activate() {
		$ctrl.loading = true;
		ApiService.getTableData()
			.then(data => {
				$ctrl.data = data;
			})
			.catch(err => $log.error(err))
			.finally(() => {
				$ctrl.loading = false;
			});
	}
}
