import * as actionTypes from './constants';

const initialState = {
	language: 'ukr',
};

const switchLanguageReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_EN_LANGUAGE:
			return {
				...state,
				language: 'en',
			};
		case actionTypes.SET_UKR_LANGUAGE:
			return {
				...state,
				language: 'ukr',
			};
		default:
			return state;
	}
};

export default switchLanguageReducer;
