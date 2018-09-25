import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

const Image = ({ src }) => (
	<img src={ src } className={ css(styles.imageStyle) } alt="film-post" />
);

Image.propTypes = {
	src: PropTypes.string.isRequired,
};

export default Image;
