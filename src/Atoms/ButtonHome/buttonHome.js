import React from 'react';
import { Link } from 'react-router-dom';

import { I18n } from './../../I18n';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

const ButtonHome = () => (
	<div className={ css(styles.buttonHomeWrapper) }>
		<Link to={'/'}>
			<button className={ css(styles.buttomHomeStyles) }>{ I18n.t('home') }</button>
		</Link>
	</div>
);

export default ButtonHome;
