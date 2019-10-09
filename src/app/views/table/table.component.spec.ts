import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFoundationModule } from '@ericgibby/angular-foundation';
import 'angular';
import { GridDirective } from 'src/app/components/grid.directive';
import { ApiService } from '../../services/api.service';
import { TableComponent } from './table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TableComponent', () => {
	let component: TableComponent;
	let fixture: ComponentFixture<TableComponent>;
	let apiService: Partial<ApiService>;

	beforeEach(async(() => {
		apiService = jasmine.createSpyObj<ApiService>('ApiService', ['getTableData']);
		TestBed.configureTestingModule({
			imports: [AngularFoundationModule],
			declarations: [TableComponent],
			providers: [{ provide: ApiService, useValue: apiService }],
			schemas: [NO_ERRORS_SCHEMA]
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
