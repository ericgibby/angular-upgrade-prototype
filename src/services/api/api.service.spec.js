import fetchMock from 'fetch-mock-jest';
import { URLS } from '../../app/constants/urls';

const { inject, module } = window.angular.mock;

describe('ApiService', () => {
	let $flushPendingTasks;
	let ApiService;

	beforeEach(() => {
		module('services.api', $provide => {
			$provide.constant('URLS', URLS);
		});
		inject($injector => {
			$flushPendingTasks = $injector.get('$flushPendingTasks');
			ApiService = $injector.get('ApiService');
		});
	});

	afterEach(() => {
		$flushPendingTasks = undefined;
		ApiService = undefined;
		fetchMock.restore();
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
			fetchMock.getOnce(URLS.api, tableData);
			ApiService.getTableData()
				.then(data => {
					expect(data).toEqual(tableData.users);
					expect(fetchMock).toHaveFetched(URLS.api);
					done();
				})
				.catch(done.fail);

			$flushPendingTasks();
			// Flush in a timeout so the observable will emit ¯\_(ツ)_/¯
			setTimeout(() => $flushPendingTasks());
		});
	});
});
