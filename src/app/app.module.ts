import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { DowngradeModule } from './downgrade/downgrade.module';

@NgModule({
	imports: [BrowserModule, UpgradeModule, DowngradeModule]
})
export class AppModule {
	constructor(private upgrade: UpgradeModule) {}

	ngDoBootstrap() {
		this.upgrade.bootstrap(document.body, ['app']);
	}
}
