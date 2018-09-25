import { call, put, race } from 'redux-saga/effects';

import { GET_POST_DETAIL_FAILURE } from '../Pages/PostDetail/constants';
import history from './../history';

import { getComments } from './../API/getComments';
import timeout from './timeout';

function* fetchPostDetail(action) {
	const [postDetail, errorPostDetail] = yield race([
		call(() => getComments(action.id)),
		timeout(history, GET_POST_DETAIL_FAILURE),
	]);

	yield put(postDetail);
}

export default fetchPostDetail;
