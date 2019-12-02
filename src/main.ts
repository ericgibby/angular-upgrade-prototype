// Load our legacy app code
// THIS MUST BE FIRST
import './index.js';

import { enableProdMode, NgModuleRef, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.then((ref: NgModuleRef<AppModule>) => {
		// Re-navigate to current route so Angular is aware of route change.
		const location = ref.injector.get(Location);
		const router = ref.injector.get(Router);
		const zone = ref.injector.get(NgZone);
		zone.run(() => {
			router.navigateByUrl(location.path(true));
		});
	})
	.catch(err => console.error(err));
