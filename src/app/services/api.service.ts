import { Injectable } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Ng1ServiceWrapper } from './ng1-service-wrapper';

interface IApiService {
	getTableData(): Promise<any[]> | Observable<any[]>;
}

@Injectable({
	providedIn: 'root'
})
export class ApiService extends Ng1ServiceWrapper<IApiService> implements IApiService {
	constructor(protected upgrade: UpgradeModule) {
		super('ApiService', upgrade);
	}

	getTableData(): Observable<any[]> {
		return this.getNg1Service().pipe(switchMap(api => from(api.getTableData())));
	}
}
