import * as actionTypes from './constants';

export const getPostDetailStart = id => ({
	type: actionTypes.GET_POST_DETAIL_START,
	id: id,
});
