import * as types from './constants';

const initialState = {
	posts: [],
	postsLoading: false,
	postsError: '',
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_POSTS_START:
			return {
				...state,
				postsLoading: true,
				postsError: '',
			};
		case types.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
				postsLoading: false,
			};
		case types.GET_POSTS_FAILURE:
			return {
				...state,
				posts: [],
				postsLoading: false,
				postsError: action.payload,
			};
		default:
			return state;
	}
};

export default postsReducer;
