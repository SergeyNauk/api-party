import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';
import './../../index.css';

import connect from 'react-redux/es/connect/connect';
import { compose, setPropTypes } from 'recompose';

import { setEnLanguage, setUkrLanguage } from './actions';

const SwitchButton = ({ language, setEnLanguage, setUkrLanguage }) => (
	<div className={ css(styles.switchButtonWrapper) }>
		<div className="onoffswitch">
			<input
				type="checkbox"
				name="onoffswitch"
				className="onoffswitch-checkbox"
				id="myonoffswitch"
			/>
			<label
				className="onoffswitch-label"
				htmlFor="myonoffswitch"
				onClick={() => {
					if (language === 'ukr') {
						setEnLanguage();
					} else {
						setUkrLanguage();
					}
				}}
			>
				<span className="onoffswitch-inner" />
				<span className="onoffswitch-switch" />
			</label>
		</div>
	</div>
);

const withPropTypes = setPropTypes({
	language: PropTypes.string.isRequired,
	setEnLanguage: PropTypes.func.isRequired,
	setUkrLanguage: PropTypes.func.isRequired,
});

const reduxConnect = connect(
	state => {
		let language = state.switchLanguageReducer.language;

		return {
			language,
		};
	},
	{
		setEnLanguage,
		setUkrLanguage,
	}
);

const composeHoc = compose(
	reduxConnect,
	withPropTypes
);

export default composeHoc(SwitchButton);
