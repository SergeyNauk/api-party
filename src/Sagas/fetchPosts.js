import { call, put, race } from 'redux-saga/effects';

import { GET_POSTS_FAILURE } from '../Pages/Posts/constants';
import history from './../history';

import { getPosts } from './../API/getPosts';
import timeout from './timeout';

function* fetchPosts() {
	const [posts, errorPosts] = yield race([
		call(() => getPosts()),
		timeout(history, GET_POSTS_FAILURE),
	]);

	yield put(posts);
}

export default fetchPosts;
