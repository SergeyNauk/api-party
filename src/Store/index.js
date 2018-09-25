import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './../Reduers';

export const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	);
};
