import { UrlHandlingStrategy, UrlTree } from '@angular/router';

export class AngularJsUrlHandlingStrategy extends UrlHandlingStrategy {
	angularPathsRegex: RegExp;

	constructor(angularPaths: string[]) {
		super();
		this.angularPathsRegex = new RegExp(`^[\/]?(${angularPaths.join('|')})`, 'i');
	}

	shouldProcessUrl(url: UrlTree) {
		return this.angularPathsRegex.test(url.toString());
	}

	extract(url: UrlTree) {
		return url;
	}

	merge(newUrlPart: UrlTree, rawUrl: UrlTree) {
		return newUrlPart;
	}
}

export function angularJsUrlHandlingStrategyFactory(angularPaths: string[]) {
	return new AngularJsUrlHandlingStrategy(angularPaths);
}
