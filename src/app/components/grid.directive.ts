import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: 'grid'
})
export class GridDirective extends UpgradeComponent {
	@Input() columns: any;
	@Input() data: any[];

	constructor(elementRef: ElementRef, injector: Injector) {
		super('grid', elementRef, injector);
	}
}
