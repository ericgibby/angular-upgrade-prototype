import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@ericgibby/angular-foundation';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	columns: TableColumn[] = [
		{ key: 'firstName', title: 'First Name' },
		{ key: 'lastName', title: 'Last Name' },
		{ key: 'email', title: 'Email' },
		{ key: 'dateCreated', title: 'Created' }
	];
	data: any[];

	constructor(private api: ApiService) {}

	ngOnInit() {
		this.api
			.getTableData()
			.pipe(
				catchError(err => {
					console.error(err);
					return of([]);
				}),
				tap(data => {
					this.data = data;
				})
			)
			.subscribe();
	}
}
