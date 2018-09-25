import * as urlAPI from './constantsAPI';
import {
	GET_WEATHER_SUCCESS,
	GET_WEATHER_FAILURE,
} from '../Pages/Weather/constants';

import { invalidAPI } from './invalidAPI';

export const getWeather = city => {
	if (city !== undefined && city !== '') {
		return fetch(`${urlAPI.weatherAPI}${city}${urlAPI.weatherServiceKey}`)
			.then(res => {
				console.log(res.status === 200, '--weather api--');
				if (res.status === 200) {
					return res.json();
				} else {
					return { error: res.status };
				}
			})
			.then(result => {
				if (!result.error) {
					return {
						type: GET_WEATHER_SUCCESS,
						payload: result,
					};
				} else {
					invalidAPI(result.error);
					
					return {
						type: GET_WEATHER_FAILURE,
						payload: result.error,
					};
				}
			})
			.catch(error => {
				invalidAPI(error);
	
				return {
					type: GET_WEATHER_FAILURE,
					payload: error,
				};
			});
	} else {
		invalidAPI(`city not found`);

		return {
			type: GET_WEATHER_FAILURE,
		};
	}
};
