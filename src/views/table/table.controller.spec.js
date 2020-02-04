const { inject, module } = window.angular.mock;

describe('TableController', () => {
	let $controller;
	let $ctrl;
	let $q;
	let $rootScope;
	let ApiService;

	beforeEach(() => {
		module('app.table');
		inject($injector => {
			$controller = $injector.get('$controller');
			$q = $injector.get('$q');
			$rootScope = $injector.get('$rootScope');
		});

		ApiService = {
			getTableData: jest.fn()
		};
	});

	afterEach(() => {
		$controller = undefined;
		$q = undefined;
		$rootScope = undefined;
		ApiService = undefined;
	});

	it('initializes without error', () => {
		jest.spyOn(ApiService, 'getTableData').mockImplementation(() => $q.when([]));
		$ctrl = $controller('TableController', { ApiService });
		expect($ctrl).toBeDefined();
	});

	describe('.activate()', () => {
		it('loads table data', () => {
			const users = [
				{ firstName: 'User', lastName: 'One', email: 'example.com', dateCreated: '20019-09-23T00:00:00.000Z' }
			];
			jest.spyOn(ApiService, 'getTableData').mockImplementation(() => $q.when(users));

			$ctrl = $controller('TableController', { ApiService });
			$rootScope.$apply();
			expect($ctrl.data).toEqual(users);
		});
	});
});
