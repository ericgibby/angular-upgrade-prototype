describe('GridController', () => {
	let $componentController;

	beforeEach(() => {
		module('components.grid');
		inject($injector => {
			$componentController = $injector.get('$componentController');
		});
	});

	afterEach(() => {
		$componentController = undefined;
	});

	it('initializes without error', () => {
		const ctrl = $componentController('grid');
		expect(ctrl).toBeDefined();
	});

	describe('.$onInit()', () => {
		it('populates `columnMap` object from `columns` object if specified', () => {
			const bindings = { columns: { col1: 'col1', col2: 'col2', col3: 'col3' } };
			const ctrl = $componentController('grid', undefined, bindings);
			ctrl.$onInit();
			expect(ctrl.columnMap).toEqual(bindings.columns);
		});

		it('populates `columnMap` from `columns` specified as array', () => {
			const bindings = { columns: ['col1', 'col2', 'col3'] };
			const ctrl = $componentController('grid', undefined, bindings);
			ctrl.$onInit();
			expect(ctrl.columnMap).toEqual({ col1: 'col1', col2: 'col2', col3: 'col3' });
		});

		it('populates `columnMap` object from `data` if `columns` not specified', () => {
			const bindings = {
				data: [
					{ col1: 'Value 1', col2: 'Value 2', col3: 'Value 3' },
					{ col1: 'Value 4', col2: 'Value 5', col3: 'Value 6' }
				]
			};
			const ctrl = $componentController('grid', undefined, bindings);
			ctrl.$onInit();
			expect(ctrl.columnMap).toEqual({ col1: 'col1', col2: 'col2', col3: 'col3' });
		});
	});
});
