import * as actionTypes from './constants';
import { I18n } from './../../I18n';

export const setUkrLanguage = () => {
	I18n.locale = 'ukr';
	localStorage.setItem('language', 'ukr');

	return {
		type: actionTypes.SET_UKR_LANGUAGE,
	};
};

export const setEnLanguage = () => {
	I18n.locale = 'en';
	localStorage.setItem('language', 'en');

	return {
		type: actionTypes.SET_EN_LANGUAGE,
	};
};
