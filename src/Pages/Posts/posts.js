import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import connect from 'react-redux/es/connect/connect';
import { compose, lifecycle, setPropTypes } from 'recompose';

import { getPostsStart } from './actions';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

import { PageContainer } from '../../Organisms/PageContainer';
import { LoadingComponent } from '../../Atoms/LoadingComponent';
import { PostCard } from '../../Atoms/PostCard';

const Posts = ({ posts, postsLoading }) => (
	<PageContainer
		template={
			<div className={ css(styles.postsWrapper) }>
				{ postsLoading ? (
					<LoadingComponent />
				) : (
					<div className={ css(styles.postsContainer) }>
						{posts.map((post, index) => (
							<Link
								key={ index }
								className={ css(styles.linkStyles) }
								to={`/post-detail/${post.id}`}
							>
								<PostCard post={ post } />
							</Link>
						))}
					</div>
				)}
			</div>
		}
	/>
);

const withLifeCycle = lifecycle({
	componentDidMount() {
		const { getPostsStart } = this.props;
		getPostsStart();
	},
});

const reduxConnect = connect(
	state => {
		let postsLoading = state.postsReducer.postsLoading;
		let posts = state.postsReducer.posts;

		return {
			postsLoading,
			posts,
		};
	},
	{
		getPostsStart,
	}
);

const withPropTypes = setPropTypes({
	postsLoading: PropTypes.bool.isRequired,
	posts: PropTypes.arrayOf(PropTypes.object).isRequired,
});

const composeHoc = compose(
	reduxConnect,
	withLifeCycle,
	withPropTypes
);

export default composeHoc(Posts);
