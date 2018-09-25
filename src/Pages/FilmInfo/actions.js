import * as actionTypes from './constants';

export const getFilmInfoStart = filmName => ({
	type: actionTypes.GET_FILM_INFO_START,
	filmName: filmName,
});
