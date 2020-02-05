import React from 'react';
import { ColumnMap } from './column-map';
import TableRow from './TableRow';

export interface TableProps {
	columns: string[] | ColumnMap;
	data: any[];
}

function Table({ columns, data }: TableProps) {
	const columnMap = Array.isArray(columns)
		? columns.reduce((map: ColumnMap, key: string) => ({ ...map, [key]: key }), {} as ColumnMap)
		: columns;
	const columnKeys = Object.keys(columnMap);

	const rows = data.map((datum, index) => <TableRow key={`TableRow${index}`} columns={columnKeys} data={datum} />);
	return (
		<table>
			<thead>
				<TableRow columns={columnKeys} data={columnMap} header={true} />
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}

export default Table;
