import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlHandlingStrategy } from '@angular/router';
import { angularJsUrlHandlingStrategyFactory } from './angular-js-url-handling-strategy';
import { TableComponent } from './views/table/table.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'table',
		component: TableComponent
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [CommonModule, RouterModule.forRoot(routes)],
	providers: [{ provide: UrlHandlingStrategy, useValue: angularJsUrlHandlingStrategyFactory(['/table']) }]
})
export class AppRoutingModule {}
