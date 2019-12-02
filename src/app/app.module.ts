import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { setUpLocationSync } from '@angular/router/upgrade';
import { UpgradeModule } from '@angular/upgrade/static';
import { AngularFoundationModule } from '@ericgibby/angular-foundation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridDirective } from './components/grid.directive';
import { DowngradeModule } from './downgrade/downgrade.module';
import { apiServiceProvider } from './services/api.service';
import { TableComponent } from './views/table/table.component';

@NgModule({
	declarations: [AppComponent, TableComponent, GridDirective],
	imports: [BrowserModule, UpgradeModule, DowngradeModule, AppRoutingModule, AngularFoundationModule],
	providers: [apiServiceProvider]
})
export class AppModule {
	constructor(public upgrade: UpgradeModule) {}

	ngDoBootstrap() {
		this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });

		// Keep location in sync between UI Router and Angular Router
		setUpLocationSync(this.upgrade, 'path');
	}
}
