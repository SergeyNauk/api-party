import * as types from './constants';

const initialState = {
	filmInfo: {},
	filmInfoLoading: false,
	filmInfoError: '',
};

const filmInfoReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_FILM_INFO_START:
			return {
				...state,
				filmInfoLoading: true,
				filmInfoError: '',
			};
		case types.GET_FILM_INFO_SUCCESS:
			return {
				...state,
				filmInfo: action.payload,
				filmInfoLoading: false,
			};
		case types.GET_FILM_INFO_FAILURE:
			return {
				...state,
				filmInfoLoading: false,
				filmInfoError: action.payload,
				filmInfo: {},
			};
		default:
			return state;
	}
};

export default filmInfoReducer;
