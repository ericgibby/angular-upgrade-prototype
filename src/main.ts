// Load our legacy app code
import './index.js';

import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.then((ref: NgModuleRef<AppModule>) => {
		try {
			ref.instance.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
		} catch (err) {
			console.error('Unable to bootstrap AngularJS:', err);
		}
	})
	.catch(err => console.error(err));
