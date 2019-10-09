// Order matters here.
// index.js must be imported first to load AngularJS
import './index.js';

import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UIRouter, UrlService } from '@uirouter/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.then(platformRef => {
		// Intialize the Angular Module
		// get() the UIRouter instance from DI to initialize the router
		const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

		// Instruct UIRouter to listen to URL changes
		function startUIRouter() {
			urlService.listen();
			urlService.sync();
		}

		platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);

		// Ensure Angular destroys itself on hot reloads.
		const win = window as any;
		if (win.ngRef) {
			win.ngRef.destroy();
		}
		win.ngRef = platformRef;
	})
	.catch(err => console.error(err));
