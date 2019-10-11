import { UpgradeModule } from '@angular/upgrade/static';
import { BootstrapService } from './bootstrap.service';
import { takeWhile, tap, switchMap } from 'rxjs/operators';

export abstract class ApiService {
	abstract getTableData(): Promise<any>;
}

export const apiServiceProvider = {
	provide: ApiService,
	useFactory: (upgrade: UpgradeModule, bootstrapper: BootstrapService) => {
		console.log('apiServiceProvider...');
		return bootstrapper.bootstrapped$.pipe(
			takeWhile(value => !value),
			switchMap(() => upgrade.$injector.get('ApiService'))
		);
	},
	deps: [UpgradeModule, BootstrapService]
};
