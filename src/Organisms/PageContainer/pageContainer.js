import React from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { css } from 'aphrodite/no-important';
import 'react-toastify/dist/ReactToastify.css';
import './../../index.css';

import { ToastContainer } from 'react-toastify';
import { Header } from './../../Molecules/Header';
import { Menu } from './../../Molecules/Menu';

const pageContainer = ({ template }) => (
	<div className={ css(styles.pageContainerWrapper) }>
		<Menu />
		<Header />
		<ToastContainer
			position="bottom-center"
			autoClose={5000}
			hideProgressBar
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnVisibilityChange
			draggable
			pauseOnHover
		/>
		{ template }
	</div>
);

pageContainer.propTypes = {
	template: PropTypes.element.isRequired,
};

export default pageContainer;
