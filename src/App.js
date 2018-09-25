import '@babel/polyfill';

import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from './history';

import './App.css';

import { configureStore } from './../src/Store';
import { sagaMiddleware } from './../src/Store';

import rootSaga from './../src/Sagas/rootSagas';

import { Provider } from 'react-redux';

import { Home } from './../src/Pages/Home';
import { FilmInfo } from './../src/Pages/FilmInfo';
import { Posts } from './../src/Pages/Posts';
import { PostDetail } from './../src/Pages/PostDetail';
import { Weather } from './../src/Pages/Weather';

const store = configureStore();
sagaMiddleware.run(rootSaga);

class App extends Component {
	render() {
		return (
			<Provider store={ store }>
				<Router history={ history }>
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/film-info" component={FilmInfo} />
						<Route path="/posts" component={Posts} />
						<Route path="/post-detail/:id" component={PostDetail} />
						<Route path="/weather" component={Weather} />
						<Redirect to="/home" />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
