import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

const PostCommentCard = ({ comment }) => (
	<div className={ css(styles.postCommentCardWrapper) }>
		<span className={ css(styles.postCommentCardTitle) }>
			Comment #{comment.id}
		</span>
		<span className={ css(styles.postNameEmail) }>Name: {comment.name}</span>
		<span className={ css(styles.postNameEmail) }>Email: {comment.email}</span>
		<span className={ css(styles.postCommentCardBody) }>{comment.body}</span>
	</div>
);

PostCommentCard.propTypes = {
	comment: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}),
};

export default PostCommentCard;
