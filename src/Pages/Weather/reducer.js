import * as types from './constants';

const initialState = {
	weather: {},
	weatherLoading: false,
	weatherError: '',
};

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_WEATHER_START:
			return {
				...state,
				weatherLoading: true,
				weatherError: '',
			};
		case types.GET_WEATHER_SUCCESS:
			return {
				...state,
				weather: action.payload,
				weatherLoading: false,
			};
		case types.GET_WEATHER_FAILURE:
			return {
				...state,
				weatherLoading: false,
				weatherError: action.payload,
				weather: {},
			};
		default:
			return state;
	}
};

export default weatherReducer;
