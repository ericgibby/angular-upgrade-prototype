import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFoundationElementsModule } from '@ericgibby/angular-foundation';

@NgModule({
	imports: [BrowserModule, AngularFoundationElementsModule]
})
export class AngularElementsModule {
	ngDoBootstrap() {}
}
