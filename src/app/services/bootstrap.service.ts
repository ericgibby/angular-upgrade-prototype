import { Injectable } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BootstrapService {
	private bootstrapped = false;
	private bootstrappedSubject = new BehaviorSubject<boolean>(this.bootstrapped);
	bootstrapped$ = this.bootstrappedSubject.asObservable();

	constructor(private upgrade: UpgradeModule) {}

	bootstrapAngularJs() {
		this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
		this.bootstrapped = true;
		this.bootstrappedSubject.next(true);
	}

	get isBootstrapped() {
		return this.bootstrapped;
	}
}
