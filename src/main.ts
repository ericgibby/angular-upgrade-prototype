// Load our legacy app code
// THIS MUST BE FIRST
import './index.js';

import { enableProdMode, NgModuleRef, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Router } from '@angular/router';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.then((ref: NgModuleRef<AppModule>) => {
		// Reload current route so Angular is aware.
		const zone = ref.injector.get(NgZone);
		const router = ref.injector.get(Router);
		zone.run(() => {
			const { pathname, search, hash } = window.location;
			const url = `${pathname}${search}${hash}`;
			router.navigateByUrl(url);
		});
	})
	.catch(err => console.error(err));
