// eslint-disable-next-line import/no-webpack-loader-syntax
import React, { useEffect, useState } from 'react';
import { catchError, tap } from 'rxjs/operators';
import '../../../components/grid/grid.component';
import AngularJs from '../../components/AngularJs/AngularJs';
import Table from '../../components/Table/Table';
import { getTableData } from '../../services/api';

export default function TableView() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const sub = getTableData()
			.pipe(
				tap(users => setData(users)),
				catchError(err => {
					console.error(err);
					return [];
				})
			)
			.subscribe();

		return () => sub.unsubscribe();
	}, []);

	const bindings = {
		columns: { firstName: 'First Name', lastName: 'Last Name', email: 'Email', dateCreated: 'Created' },
		data
	};

	return (
		<React.Fragment>
			<h2>
				The Table View <small>React</small>
			</h2>
			<p>This is a page that displays a table with useless data.</p>
			<h3>
				React Table <small>React</small>
			</h3>
			<Table
				columns={{ firstName: 'First Name', lastName: 'Last Name', email: 'Email', dateCreated: 'Created' }}
				data={data}
			/>
			<h3>
				AngularJS Grid <small>AngularJS</small>
			</h3>
			<AngularJs
				bindings={bindings}
				module="app.grid"
				dependencies={['components.grid']}
				template={`<grid columns="columns" data="data"></grid>`}
			/>
		</React.Fragment>
	);
}
