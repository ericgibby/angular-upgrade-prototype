import React, { useEffect, useState } from 'react';
import { catchError, tap } from 'rxjs/operators';
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

	return (
		<React.Fragment>
			<h2>
				The Table View <small>React</small>
			</h2>
			<p>This is a page that displays a table with useless data.</p>
			<Table
				columns={{ firstName: 'First Name', lastName: 'Last Name', email: 'Email', dateCreated: 'Created' }}
				data={data}
			/>
		</React.Fragment>
	);
}
