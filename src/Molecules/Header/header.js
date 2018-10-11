import React from 'react';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

import { I18n } from './../../I18n';

import { SwitchButton } from './../../Atoms/SwitchButton';
import { ButtonHome } from './../../Atoms/ButtonHome';
import { SignOutButton } from './../../Atoms/SignOutButton';

const Header = () => (
	<div className={css(styles.headerWrapper)}>
		<span className={css(styles.headerTitle)}>{I18n.t('header_title')}</span>
		<SwitchButton />
		<ButtonHome />
		<SignOutButton />
	</div>
);

export default Header;
