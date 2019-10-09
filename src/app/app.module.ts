import { LocationUpgradeModule } from '@angular/common/upgrade';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppRoutingModule } from './app-routing.module';
import { DowngradeModule } from './downgrade/downgrade.module';

@NgModule({
	imports: [BrowserModule, UpgradeModule, DowngradeModule, LocationUpgradeModule.config(), AppRoutingModule],
	declarations: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
	constructor(private upgrade: UpgradeModule) {}

	ngDoBootstrap() {
		this.upgrade.bootstrap(document.body, ['app']);
	}
}
