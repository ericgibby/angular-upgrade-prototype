const { inject, module } = window.angular.mock;

describe('HomeController', () => {
	let $controller;

	beforeEach(() => {
		module('app.home');
		inject($injector => {
			$controller = $injector.get('$controller');
		});
	});

	afterEach(() => {
		$controller = undefined;
	});

	it('initializes without error', () => {
		const ctrl = $controller('HomeController');
		expect(ctrl).toBeDefined();
	});
});
