import React from 'react';

export interface TableRowProps {
	columns: string[];
	data: { [key: string]: any };
	header?: boolean;
}

export default function TableRow({ columns, data, header }: TableRowProps) {
	const cols = columns.map((name, index) => {
		const key = `TableColumn${index}`;
		return header ? <th key={key}>{data[name]}</th> : <td key={key}>{data[name]}</td>;
	});
	return <tr>{cols}</tr>;
}
