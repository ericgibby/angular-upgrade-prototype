// Load our legacy app code
// THIS MUST BE FIRST
import './index.js';

import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setUpLocationSync } from '@angular/router/upgrade';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.then((ref: NgModuleRef<AppModule>) => {
		console.log('Bootstrapping AngularJS...');
		ref.instance.upgrade.bootstrap(document.body, ['app'], { strictDi: true });

		// Keep location in sync between UI Router and Angular Router
		setUpLocationSync(ref.instance.upgrade, 'path');
	})
	.catch(err => console.error(err));
