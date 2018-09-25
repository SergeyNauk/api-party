import React from 'react';
import PropTypes from 'prop-types';

import { compose, withStateHandlers, setPropTypes } from 'recompose';

import { I18n } from './../../I18n';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

const Input = ({ actionFunc, handleChange, filmName }) => (
	<div>
		<input
			className={ css(styles.inputStyles) }
			onChange={ handleChange }
			value={ filmName }
			placeholder={ I18n.t('enter_film_name') }
		/>
		<button
			className={ css(styles.sendButton) }
			onClick={ () => {
				actionFunc(filmName.trim());
			}}
		>
			{ I18n.t('search_info') }
		</button>
	</div>
);

const withPropTypes = setPropTypes({
	filmName: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	actionFunc: PropTypes.func.isRequired,
});

const initialState = () => ({
	filmName: '',
});

const localStateHandlers = {
	handleChange: ({ filmName }) => event => ({ filmName: event.target.value }),
};

const stateComponent = withStateHandlers(initialState, localStateHandlers);

const composeHoc = compose(
	stateComponent,
	withPropTypes
);

export default composeHoc(Input);
