describe('ApiService', () => {
	let $httpBackend;
	let ApiService;
	let URLS;

	beforeEach(() => {
		URLS = {
			api: 'http://example.com'
		};
		module('services.api', $provide => {
			$provide.constant('URLS', URLS);
		});
		inject($injector => {
			$httpBackend = $injector.get('$httpBackend');
			ApiService = $injector.get('ApiService');
		});
	});

	afterEach(() => {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();

		$httpBackend = undefined;
		ApiService = undefined;
		URLS = undefined;
	});

	it('initializes without error', () => {
		expect(ApiService).toBeDefined();
	});

	describe('.getTableData', () => {
		it('makes HTTP request', done => {
			const tableData = {
				users: [
					{ firstName: 'User', lastName: 'One', email: 'user@example.com', dateCreated: '2019-09-23T00:00:00.000Z' }
				]
			};
			$httpBackend.expectGET(URLS.api).respond(tableData);
			ApiService.getTableData()
				.then(data => {
					expect(data).toEqual(tableData.users);
					done();
				})
				.catch(done.fail);
			$httpBackend.flush();
		});
	});
});
