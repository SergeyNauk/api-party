import React from 'react';
import { Link } from 'react-router-dom';

import { I18n } from '../../I18n';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

import fire from './../../Firebase/authConfig';

const SignOutButton = () => (
	<div className={ css(styles.buttonHomeWrapper) }>
			<button 
				className = { css(styles.buttomHomeStyles) }
				onClick = { () => fire.auth().signOut() }
			>
				{ I18n.t('sign_out') }
			</button>
	</div>
);

export default SignOutButton;
