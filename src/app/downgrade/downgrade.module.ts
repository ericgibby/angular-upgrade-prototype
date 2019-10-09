import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { AF_COMPONENTS, AngularFoundationModule } from '@ericgibby/angular-foundation';
import { registerLocationFactory } from './location-shim';

@NgModule({
	imports: [CommonModule, AngularFoundationModule],
	entryComponents: [...AF_COMPONENTS]
})
export class DowngradeModule {
	constructor() {
		const module = (window as any).angular.module('downgrade', []) as angular.IModule;
		AF_COMPONENTS.forEach(component => {
			const selector = `af${component.name.replace(/Component/i, '')}`;
			module.directive(selector, downgradeComponent({ component }));
		});

		// registerLocationFactory(module);
	}
}
