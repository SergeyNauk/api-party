import * as types from './constants';

const initialState = {
	postDetail: [],
	postDetailLoading: false,
	postDetailError: '',
};

const postDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_POST_DETAIL_START:
			return {
				...state,
				postDetailLoading: true,
				postDetailError: '',
			};
		case types.GET_POST_DETAIL_SUCCESS:
			return {
				...state,
				postDetail: action.payload,
				postDetailLoading: false,
			};
		case types.GET_POST_DETAIL_FAILURE:
			return {
				...state,
				postDetail: [],
				postDetailLoading: false,
				postDetailError: action.payload,
			};
		default:
			return state;
	}
};

export default postDetailReducer;
