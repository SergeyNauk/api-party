import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

const PostCard = ({ post }) => (
	<div className={ css(styles.postCardWrapper) }>
		<span className={ css(styles.postTitle) }> {post.id} { post.title }</span>
		<span className={css(styles.postBody)}>{ post.body }</span>
	</div>
);

PostCard.propTypes = {
	post: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}),
};

export default PostCard;
