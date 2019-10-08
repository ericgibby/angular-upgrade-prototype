import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsViewComponent } from './angularjs-view.component';

describe('AngularjsViewComponent', () => {
	let component: AngularjsViewComponent;
	let fixture: ComponentFixture<AngularjsViewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AngularjsViewComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AngularjsViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
