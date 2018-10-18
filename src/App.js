import '@babel/polyfill';

import React, { Component } from 'react';
import fire from './Firebase/authConfig';

import './App.css';

import { LoginForm } from './Organisms/LoginForm';
import RouteConfig from './Route/routeConfig';

import { configureStore } from './../src/Store';
import { sagaMiddleware } from './../src/Store';
import rootSaga from './../src/Sagas/rootSagas';

import history from './../src/history';

const store = configureStore();
sagaMiddleware.run(rootSaga);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {}
		}
	}
	
	authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
		  if (user) {
				this.setState({user});

				localStorage.setItem('user', user.uid);
		  } else {
				this.setState({user: null});

				localStorage.removeItem('user');
		  }
		});
	}

	componentDidMount = () => {
		this.authListener();
	}
	
	render() {
		const { user } = this.state;
		return (
			<div className='App'>
				{	user === null 
					? ( 
						<LoginForm />
						)
					: ( 
						<RouteConfig
							store = { store }
							history = { history }
						/> 
					 )
				}
			</div>
		)
	}
}

export default App;
