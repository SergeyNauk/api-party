import i18n from 'i18n-js';

import englishTranslation from './en';
import ukrainianTranslation from './ukr';

i18n.fallbacks = true;
i18n.defaultLocale = 'ukr';

i18n.translations = {
	en: englishTranslation,
	ukr: ukrainianTranslation,
};

let language = localStorage.getItem('language');
i18n.locale = language ? language : 'ukr';

export default i18n;
