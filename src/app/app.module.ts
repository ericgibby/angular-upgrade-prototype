import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AngularFoundationModule } from '@ericgibby/angular-foundation';
import { AppRoutingModule } from './app-routing.module';
import { GridDirective } from './components/grid.directive';
import { DowngradeModule } from './downgrade/downgrade.module';
import { apiServiceProvider } from './services/api.service';
import { TableComponent } from './views/table/table.component';

@NgModule({
	declarations: [TableComponent, GridDirective],
	entryComponents: [TableComponent],
	imports: [BrowserModule, UpgradeModule, DowngradeModule, AppRoutingModule, AngularFoundationModule],
	providers: [apiServiceProvider],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
	constructor(private upgrade: UpgradeModule) {}

	ngDoBootstrap() {
		this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
	}
}
