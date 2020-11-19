import React from 'react';
import HomeView from '../views/HomeView';
import Error404View from '../views/Error404View';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => {
	return (
		<Router>
			<header>siema</header>

			<Switch>
				<Route exact path='/' component={HomeView} />
				<Route component={Error404View} />
			</Switch>
		</Router>
	);
};

export default Root;
