import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { TableColumn } from '@ericgibby/angular-foundation';

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
			.then(data => (this.data = data))
			.catch(err => console.error(err));
	}
}
