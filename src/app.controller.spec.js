describe('AppController', () => {
	let $controller;
	let $location;

	beforeEach(() => {
		angular.module('downgrade', []);

		$location = jasmine.createSpyObj('$location', [
			'absUrl',
			'url',
			'protocol',
			'host',
			'port',
			'path',
			'search',
			'hash',
			'replace',
			'state'
		]);
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
