import * as urlAPI from './constantsAPI';

import {
	GET_FILM_INFO_SUCCESS,
	GET_FILM_INFO_FAILURE,
} from '../Pages/FilmInfo/constants';

import { invalidAPI } from './invalidAPI';

export const getMovieInfo = filmName => {
	return fetch(`${urlAPI.movieAPI}${filmName}${urlAPI.movieSettingsAPI}`)
		.then(res => {
			if (res.status === 200) {
				return res.json();
			} else {
				return { error: res.status };
			}
		})
		.then(result => {
			if (!result.error) {
				return {
					type: GET_FILM_INFO_SUCCESS,
					payload: result,
				};
			} else {
				invalidAPI(result.error);
				
				return {
					type: GET_FILM_INFO_FAILURE,
					payload: result.error,
				};
			}
		})
		.catch(error => {
			invalidAPI(error);

			return {
				type: GET_FILM_INFO_FAILURE,
				payload: error,
			};
		});
};
