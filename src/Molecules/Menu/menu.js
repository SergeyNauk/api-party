import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { css } from 'aphrodite/no-important';
import { menuStyles } from './configMenu';
import './../../index.css';

import { I18n } from './../../I18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faListOl, faCloud } from '@fortawesome/free-solid-svg-icons';

import { slide as Accordion } from 'react-burger-menu';

import { compose, setPropTypes } from 'recompose';
import connect from 'react-redux/es/connect/connect';

const Menu = ({ language }) => (
	<Accordion styles={ menuStyles }>
		<Link to={'/film-info'}>
			<FontAwesomeIcon icon={faFilm} />
			<span className={ css(styles.menuItem) }>{I18n.t('favorite_film')}</span>
		</Link>
		<Link to={'/posts'}>
			<FontAwesomeIcon icon={faListOl} />
			<span className={ css(styles.menuItem) }>{I18n.t('post_list')}</span>
		</Link>
		<Link to={'/weather'}>
			<FontAwesomeIcon icon={faCloud} />
			<span className={ css(styles.menuItem) } href="/">
				{ I18n.t('weather_in_your_city') }
			</span>
		</Link>
	</Accordion>
);

const withPropTypes = setPropTypes({
	language: PropTypes.string.isRequired,
});

const reduxConnect = connect(
	state => {
		let language = state.switchLanguageReducer.language;

		return {
			language,
		};
	},
	null
);

const composeHoc = compose(
	reduxConnect,
	withPropTypes
);

export default composeHoc(Menu);
