import { call, put, race } from 'redux-saga/effects';

import { GET_FILM_INFO_FAILURE } from '../Pages/FilmInfo/constants';
import history from './../history';

import { getMovieInfo } from './../API/getMovieInfo';
import timeout from './timeout';

function* fetchFilmInfo(action) {
	const [filmInfo, errorMovieInfo] = yield race([
		call(() => getMovieInfo(action.filmName)),
		timeout(history, GET_FILM_INFO_FAILURE),
	]);

	yield put(filmInfo);
}

export default fetchFilmInfo;
