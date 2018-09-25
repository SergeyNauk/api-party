import * as urlAPI from './constantsAPI';

import { invalidAPI } from './invalidAPI';

export const getCityApi = () => {
	return fetch(urlAPI.cityAPI)
		.then(res => {
			if (res.status === 200) {
				return res.json();
			} else {
				return { error: res.status };
			}
		})
		.then(result => {
			if (!result.error) {
				return result;
			} else {
				invalidAPI(result.error);
				
				return {
					city: { name_en: '' },
				};
			}
		})
		.catch(error => {
			invalidAPI(error);

			return {
				city: { name_en: '' },
			};
		});
};
