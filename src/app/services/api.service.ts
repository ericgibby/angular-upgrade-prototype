export abstract class ApiService {
	abstract getTableData(): Promise<any>;
}

export const apiServiceProvider = {
	provide: ApiService,
	useFactory: ($injector: any) => $injector.get('ApiService'),
	deps: ['$injector']
};
