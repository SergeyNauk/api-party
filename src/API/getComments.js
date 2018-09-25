import * as urlAPI from './constantsAPI';
import {
	GET_POST_DETAIL_SUCCESS,
	GET_POST_DETAIL_FAILURE,
} from '../Pages/PostDetail/constants';

import { invalidAPI } from './invalidAPI';

export const getComments = postId => {
	return fetch(`${urlAPI.postsAPI}/${postId}/comments`)
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
					type: GET_POST_DETAIL_SUCCESS,
					payload: result,
				};
			} else {
				invalidAPI(result.error);

				return {
					type: GET_POST_DETAIL_FAILURE,
					payload: result.error,
				};
			}
		})
		.catch(error => {
			invalidAPI(error);

			return {
				type: GET_POST_DETAIL_FAILURE,
				payload: error,
			};
		});
};
