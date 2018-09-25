import { takeEvery } from 'redux-saga/effects';

import { GET_POSTS_START } from '../Pages/Posts/constants';
import { GET_POST_DETAIL_START } from '../Pages/PostDetail/constants';
import { GET_WEATHER_START } from '../Pages/Weather/constants';
import { GET_FILM_INFO_START } from '../Pages/FilmInfo/constants';

import fetchFilmInfo from './fetchFilmInfo';
import fetchWeather from './fetchWeather';
import fetchPostDetail from './fetchPostDetail';
import fetchPosts from './fetchPosts';

export default function* rootSaga() {
	yield takeEvery(GET_POSTS_START, fetchPosts);
	yield takeEvery(GET_POST_DETAIL_START, fetchPostDetail);
	yield takeEvery(GET_WEATHER_START, fetchWeather);
	yield takeEvery(GET_FILM_INFO_START, fetchFilmInfo);
}
