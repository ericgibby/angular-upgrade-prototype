import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { DowngradeModule } from './downgrade/downgrade.module';
import { AngularjsViewComponent } from './views/angularjs-view/angularjs-view.component';

@NgModule({
	imports: [BrowserModule, UpgradeModule, DowngradeModule],
	declarations: [AngularjsViewComponent]
})
export class AppModule {
	constructor(private upgrade: UpgradeModule) {}

	ngDoBootstrap() {
		this.upgrade.bootstrap(document.body, ['app']);
	}
}
