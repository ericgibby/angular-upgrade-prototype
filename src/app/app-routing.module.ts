import { NgModule } from '@angular/core';
import { UIRouterUpgradeModule, NgHybridStateDeclaration } from '@uirouter/angular-hybrid';
import { TableComponent } from './views/table/table.component';

const states: NgHybridStateDeclaration[] = [{ name: 'app.table', url: 'table', component: TableComponent }];

@NgModule({
	entryComponents: [TableComponent],
	imports: [UIRouterUpgradeModule.forRoot({ states })]
})
export class AppRoutingModule {}
