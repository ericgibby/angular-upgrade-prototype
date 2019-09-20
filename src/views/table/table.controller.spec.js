describe('TableController', () => {
	let $controller;

	beforeEach(() => {
		module('app.table');
		inject($injector => {
			$controller = $injector.get('$controller');
		});
	});

	afterEach(() => {
		$controller = undefined;
	});

	it('initializes without error', () => {
		const ctrl = $controller('TableController');
		expect(ctrl).toBeDefined();
	});
});
