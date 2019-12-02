import { TestBed } from '@angular/core/testing';

import { ApiService, apiServiceProvider } from './api.service';
import { UpgradeModule } from '@angular/upgrade/static';
import { Injector } from '@angular/core';

describe('ApiService', () => {
	let $injector: Partial<Injector>;

	beforeEach(() => {
		$injector = {
			get: jasmine.createSpy().and.returnValue({})
		};
		TestBed.configureTestingModule({
			providers: [{ provide: '$injector', useValue: $injector }, apiServiceProvider]
		});
	});

	it('should be created', () => {
		const service: ApiService = TestBed.get(ApiService);
		expect(service).toBeTruthy();
	});
});
