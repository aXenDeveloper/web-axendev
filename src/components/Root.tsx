import React from 'react';
import HomeView from '../views/HomeView';
import ProjectsView from '../views/ProjectsView';
import Error404View from '../views/Error404View';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = (): JSX.Element => {
	return (
		<>
			<Router>
				<Header />

				<Switch>
					<Route exact path='/' component={HomeView} />
					<Route exact path='/projects' component={ProjectsView} />
					<Route component={Error404View} />
				</Switch>
			</Router>
		</>
	);
};

export default Root;
