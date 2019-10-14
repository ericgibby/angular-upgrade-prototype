import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { UpgradeModule } from '@angular/upgrade/static';

describe('ApiService', () => {
	let upgrade: Partial<UpgradeModule>;

	beforeEach(() => {
		upgrade = {
			$injector: {
				get: jasmine.createSpy().and.returnValue({})
			}
		};
		TestBed.configureTestingModule({
			providers: [{ provide: UpgradeModule, useValue: upgrade }]
		});
	});

	it('should be created', () => {
		const service: ApiService = TestBed.get(ApiService);
		expect(service).toBeTruthy();
	});
});