import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { AngularFoundationModule } from '@ericgibby/angular-foundation';
import { apiServiceProvider, ApiService } from '../../services/api.service';

describe('TableComponent', () => {
	let component: TableComponent;
	let fixture: ComponentFixture<TableComponent>;
	let apiService: Partial<ApiService>;

	beforeEach(async(() => {
		apiService = jasmine.createSpyObj<ApiService>('ApiService', ['getTableData']);
		TestBed.configureTestingModule({
			imports: [AngularFoundationModule],
			declarations: [TableComponent],
			providers: [{ provide: ApiService, useValue: apiService }]
		}).compileComponents();
	}));

	beforeEach(() => {
		(apiService.getTableData as jasmine.Spy).and.returnValue(Promise.resolve({}));
		fixture = TestBed.createComponent(TableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
