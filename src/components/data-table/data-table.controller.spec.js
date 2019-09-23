describe('DataTableController', () => {
	let $controller;
	let $ctrl;

	beforeEach(() => {
		module('components.dataTable');
		inject($injector => {
			$controller = $injector.get('$controller');
		});
		$ctrl = $controller('DataTableController');
	});

	afterEach(() => {
		$controller = undefined;
	});

	it('initializes without error', () => {
		expect($ctrl).toBeDefined();
	});

	describe('.$onInit()', () => {
		it('populates `columnMap` object from `columns` object if specified', () => {
			$ctrl.columns = { col1: 'col1', col2: 'col2', col3: 'col3' };
			$ctrl.$onInit();
			expect($ctrl.columnMap).toEqual($ctrl.columns);
		});

		it('populates `columnMap` from `columns` specified as array', () => {
			$ctrl.columns = ['col1', 'col2', 'col3'];
			$ctrl.$onInit();
			expect($ctrl.columnMap).toEqual({ col1: 'col1', col2: 'col2', col3: 'col3' });
		});

		it('populates `columnMap` object from `tableData` if `columns` not specified', () => {
			$ctrl.tableData = [
				{ col1: 'Value 1', col2: 'Value 2', col3: 'Value 3' },
				{ col1: 'Value 4', col2: 'Value 5', col3: 'Value 6' }
			];
			$ctrl.$onInit();
			expect($ctrl.columnMap).toEqual({ col1: 'col1', col2: 'col2', col3: 'col3' });
		});
	});
});
