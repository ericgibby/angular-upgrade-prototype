import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularElementsModule } from './app/angular-elements.module';
import { environment } from './environments/environment';
import './index.js';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(AngularElementsModule)
	.catch(err => console.error(err));
