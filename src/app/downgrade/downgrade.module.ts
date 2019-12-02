import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { AF_COMPONENTS, AngularFoundationModule } from '@ericgibby/angular-foundation';
import { AppComponent } from '../app.component';

@NgModule({
	imports: [CommonModule, AngularFoundationModule],
	entryComponents: [...AF_COMPONENTS, AppComponent]
})
export class DowngradeModule {
	constructor() {
		const module = (window as any).angular.module('downgrade', []);
		AF_COMPONENTS.forEach(component => {
			// We'll prepend with 'ng1' because we need to use a different prefix for downgraded components
			const selector = `ng1Af${component.name.replace(/Component/i, '')}`;
			module.directive(selector, downgradeComponent({ component }));
		});

		// Need to downgrade AppComponent as well so it will load in index.html
		module.directive('appRoot', downgradeComponent({ component: AppComponent }));
	}
}
