import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AngularFoundationModule } from '@ericgibby/angular-foundation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DowngradeModule } from './downgrade/downgrade.module';
import { TableComponent } from './views/table/table.component';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent, TableComponent],
	imports: [BrowserModule, UpgradeModule, DowngradeModule, AppRoutingModule, AngularFoundationModule]
})
export class AppModule {
	constructor(public upgrade: UpgradeModule) {}
}
