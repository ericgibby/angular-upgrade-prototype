import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { DowngradeModule } from './downgrade/downgrade.module';
import { apiServiceProvider } from './services/api.service';
import { TableComponent } from './views/table/table.component';

@NgModule({
	imports: [BrowserModule, UpgradeModule, DowngradeModule],
	declarations: [TableComponent],
	providers: [apiServiceProvider]
})
export class AppModule {
	constructor(private upgrade: UpgradeModule) {}

	ngDoBootstrap() {
		this.upgrade.bootstrap(document.body, ['app']);
	}
}
