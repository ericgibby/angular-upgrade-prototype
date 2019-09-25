angular.module('components.grid').component('grid', {
	bindings: {
		columns: '<',
		data: '<'
	},
	controller: GridController,
	templateUrl: 'components/grid/grid.html'
});

GridController.$inject = [];
function GridController() {
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
			$ctrl.columnMap = Object.keys(($ctrl.data && $ctrl.data[0]) || []).reduce(
				(obj, key) => ({ ...obj, [key]: key }),
				{}
			);
		}

		$ctrl.columnKeys = Object.keys($ctrl.columnMap);
	}
}
