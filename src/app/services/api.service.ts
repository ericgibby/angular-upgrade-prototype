import { UpgradeModule } from '@angular/upgrade/static';

export abstract class ApiService {
	abstract getTableData(): Promise<any>;
}

export const apiServiceProvider = {
	provide: ApiService,
	useFactory: (upgrade: UpgradeModule) => upgrade.$injector.get('ApiService'),
	deps: [UpgradeModule]
};
