import * as urlAPI from './constantsAPI';
import { GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from '../Pages/Posts/constants';

import { invalidAPI } from './invalidAPI';

export const getPosts = () => {
	return fetch(urlAPI.postsAPI)
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
					type: GET_POSTS_SUCCESS,
					payload: result,
				};
			} else {
				invalidAPI(result.error);

				return {
					type: GET_POSTS_FAILURE,
					payload: result.error,
				};
			}
		})
		.catch(error => {
			invalidAPI(error);

			return {
				type: GET_POSTS_FAILURE,
				payload: error,
			};
		});
};
