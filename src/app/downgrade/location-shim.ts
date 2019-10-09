import { $locationShim } from '@angular/common/upgrade';
import { downgradeInjectable } from '@angular/upgrade/static';

export function registerLocationFactory(module: angular.IModule) {
	module.factory('$location', downgradeInjectable($locationShim));
}
