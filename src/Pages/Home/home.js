import React from 'react';
import PropTypes from 'prop-types';

import connect from 'react-redux/es/connect/connect';
import { compose, setPropTypes } from 'recompose';
import { I18n } from './../../I18n';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

import { PageContainer } from '../../Organisms/PageContainer';

const Home = ({ language }) => (
	<PageContainer
		template={
			<div>
				<p className={ css(styles.appDescription) }>
					{ I18n.t('app_description') }
				</p>
				<p className={ css(styles.appDescription) }>
					{ I18n.t('more_info') }
				</p>
				<p className = { css(styles.appDescription) }>
					{ I18n.t('simulation') }
				</p>
			</div>
		}
	/>
);

const reduxConnect = connect(
	state => {
		let language = state.switchLanguageReducer.language;

		return {
			language,
		};
	},
	null
);

const withPropTypes = setPropTypes({
	language: PropTypes.string.isRequired,
});

const composeHoc = compose(
	reduxConnect,
	withPropTypes
);

export default composeHoc(Home);
