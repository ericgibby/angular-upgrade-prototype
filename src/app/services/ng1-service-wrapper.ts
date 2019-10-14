import { UpgradeModule } from '@angular/upgrade/static';
import { Observable, of } from 'rxjs';

export abstract class Ng1ServiceWrapper<T> {
	protected service: T;

	constructor(protected name: string, protected upgrade: UpgradeModule) {}

	protected getNg1Service(): Observable<T> {
		if (this.service) {
			return of(this.service);
		}
		return new Observable(observer => {
			const getService = (count: number) => {
				if (this.upgrade.$injector) {
					this.service = this.upgrade.$injector.get(this.name) as T;
					return observer.next(this.service);
				}
				if (count > 5) {
					return observer.error('Unable to acquire instance of $injector');
				}
				setTimeout(() => {
					getService(count + 1);
				}, count * 50);
			};

			getService(0);
		});
	}
}
