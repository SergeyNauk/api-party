import { combineReducers } from 'redux';

import switchLanguageReducer from './../Atoms/SwitchButton/reducer';
import postsReducer from './../Pages/Posts/reducer';
import postDetailReducer from './../Pages/PostDetail/reducer';
import weatherReducer from './../Pages/Weather/reducer';
import filmInfoReducer from './../Pages/FilmInfo/reducer';

export default combineReducers({
	switchLanguageReducer,
	postsReducer,
	postDetailReducer,
	weatherReducer,
	filmInfoReducer,
});
