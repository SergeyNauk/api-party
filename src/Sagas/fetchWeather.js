import { call, put, race } from 'redux-saga/effects';

import { GET_WEATHER_FAILURE } from '../Pages/Weather/constants';
import history from './../history';

import { getCityApi } from './../API/getCity';
import { getWeather } from './../API/getWeather';

import timeout from './timeout';

function* fetchWeather() {
	const [city, errorCity] = yield race([
		call(() => getCityApi()),
		timeout(history, GET_WEATHER_FAILURE),
	]);
	
	const [weather, errorWeather] = yield race([
		call(() => getWeather(city.city.name_en)),
		timeout(history, GET_WEATHER_FAILURE),
	]);
	
	yield put(weather);
}

export default fetchWeather;
