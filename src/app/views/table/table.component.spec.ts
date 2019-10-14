import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFoundationModule } from '@ericgibby/angular-foundation';
import { of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
	let api: ApiService;
	let component: TableComponent;
	let fixture: ComponentFixture<TableComponent>;

	beforeEach(async(() => {
		api = jasmine.createSpyObj('ApiService', ['getTableData']);
		TestBed.configureTestingModule({
			declarations: [TableComponent],
			imports: [AngularFoundationModule],
			providers: [{ provide: ApiService, useValue: api }]
		}).compileComponents();
	}));

	beforeEach(() => {
		(api.getTableData as jasmine.Spy).and.returnValue(of([]));
		fixture = TestBed.createComponent(TableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
