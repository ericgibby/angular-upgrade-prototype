import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { DowngradeModule } from './downgrade/downgrade.module';
import { apiServiceProvider } from './services/api.service';
import { TableComponent } from './views/table/table.component';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent, TableComponent],
	imports: [BrowserModule, UpgradeModule, DowngradeModule],
	providers: [apiServiceProvider],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
	constructor(public upgrade: UpgradeModule) {}

	// ngDoBootstrap() {
	// 	this.upgrade.bootstrap(document.body, ['app']);
	// }
}
