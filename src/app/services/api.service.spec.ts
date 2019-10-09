import { TestBed } from '@angular/core/testing';

import { ApiService, apiServiceProvider } from './api.service';

describe('ApiService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [apiServiceProvider, { provide: '$injector', useFactory: () => ({ get: () => ({}) }) }]
		})
	);

	it('should be created', () => {
		const service: ApiService = TestBed.get(ApiService);
		expect(service).toBeTruthy();
	});
});
