angular.module('components.dataTable').controller('DataTableController', DataTableController);

DataTableController.$inject = [];
function DataTableController() {
	const $ctrl = this;

	// Model
	$ctrl.columnMap = {};
	$ctrl.columnKeys = [];

	// Public functions
	$ctrl.$onInit = $onInit;

	////////////////////

	function $onInit() {
		if ($ctrl.columns) {
			if (Array.isArray($ctrl.columns)) {
				$ctrl.columnMap = $ctrl.columns.reduce((obj, key) => ({ ...obj, [key]: key }), {});
			} else {
				$ctrl.columnMap = { ...$ctrl.columns };
			}
		} else {
			$ctrl.columnMap = Object.keys(($ctrl.tableData && $ctrl.tableData[0]) || []).reduce(
				(obj, key) => ({ ...obj, [key]: key }),
				{}
			);
		}

		$ctrl.columnKeys = Object.keys($ctrl.columnMap);
	}
}
