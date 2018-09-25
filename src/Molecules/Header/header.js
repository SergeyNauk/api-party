import React from 'react';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

import { I18n } from './../../I18n';

import { SwitchButton } from './../../Atoms/SwitchButton';
import { ButtonHome } from './../../Atoms/ButtonHome';

const Header = () => (
	<div className={css(styles.headerWrapper)}>
		<span className={css(styles.headerTitle)}>{I18n.t('header_title')}</span>
		<SwitchButton />
		<ButtonHome />
	</div>
);

export default Header;
