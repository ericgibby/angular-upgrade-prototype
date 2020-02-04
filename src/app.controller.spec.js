const { inject, module } = window.angular.mock;

describe('AppController', () => {
	let $controller;
	let $location;

	beforeEach(() => {
		$location = {
			absUrl: jest.fn(),
			url: jest.fn(),
			protocol: jest.fn(),
			host: jest.fn(),
			port: jest.fn(),
			path: jest.fn(),
			search: jest.fn(),
			hash: jest.fn(),
			replace: jest.fn(),
			state: jest.fn()
		};
		module('app', $provide => {
			$provide.value('$location', $location);
		});
		inject($injector => {
			$controller = $injector.get('$controller');
		});
	});

	afterEach(() => {
		$controller = undefined;
		$location = undefined;
	});

	it('initializes without error', () => {
		const ctrl = $controller('AppController');
		expect(ctrl).toBeDefined();
		expect(ctrl).toBeDefined();
	});
});
