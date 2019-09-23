angular.module('components.dataTable').component('dataTable', {
	bindings: {
		columns: '<',
		controller: 'DataTableController',
		tableData: '<',
		templateUrl: 'components/data-table/data-table.html'
	}
});

DataTableComponent.$inject = [];
function DataTableComponent() {}
