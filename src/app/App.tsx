import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from './services/history';
import TableView from './views/Table/TableView';

export default function App() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/react-table" component={TableView} />
				<Route path="*">
					<React.Fragment />
				</Route>
			</Switch>
		</Router>
	);
}
