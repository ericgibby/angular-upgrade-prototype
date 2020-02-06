import angular, { IRootScopeService, ITimeoutService } from 'angular';
import React, { useCallback, useState, useEffect } from 'react';

export interface AngularJsProps {
	bindings: { [key: string]: any };
	dependencies: string[];
	module: string;
	template: string;
}

export default function AngularJs({
	bindings,
	dependencies = [],
	module = 'angular.component',
	template
}: AngularJsProps) {
	const [app, setApp] = useState();
	const [updateBindings, setUpdateBindings] = useState();

	useEffect(
		() => () => {
			if (!app) {
				return;
			}
			const $rootScope = app.get('$rootScope') as IRootScopeService;
			$rootScope.$destroy();
		},
		[app]
	);

	useEffect(() => {
		bindings && updateBindings && updateBindings(bindings);
	}, [bindings, updateBindings]);

	const ngContainer = useCallback(
		node => {
			if (!node || !!app) {
				return;
			}
			angular.module(module, dependencies).run([
				'$rootScope',
				'$timeout',
				($rootScope: IRootScopeService, $timeout: ITimeoutService) => {
					Object.assign($rootScope, bindings);
					setUpdateBindings(() => (updatedBindings: { [key: string]: any }) => {
						$timeout(() => {
							Object.assign($rootScope, updatedBindings);
						});
					});
				}
			]);
			setApp(angular.bootstrap(node, [module]));
		},
		[app, bindings, dependencies, module, setUpdateBindings]
	);

	return <div ref={ngContainer} dangerouslySetInnerHTML={{ __html: template }} />;
}
