import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import connect from 'react-redux/es/connect/connect';
import { compose, lifecycle, withStateHandlers, setPropTypes } from 'recompose';

import { getPostsStart } from './actions';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

import { PageContainer } from '../../Organisms/PageContainer';
import { LoadingComponent } from '../../Atoms/LoadingComponent';
import { PostCard } from '../../Atoms/PostCard';

const Posts = ({ posts, postsLoading, postInRow, changePostInRow, postsCounter, changePostCounter }) => (
	<PageContainer
		template={
			<div className={ css(styles.postsWrapper) }>
				{ postsLoading ? (
					<LoadingComponent />
				) : (
					<div className={ css(styles.postsContainer) }>
						{ posts.map((post, index) => {
							let mapCounterStart = postsCounter - 3*postInRow;
							let mapCounterEnd = postsCounter - 1;
							
							if (index >= mapCounterStart && index <= mapCounterEnd) {
								return (
									<Link
										key={ index }
										className={ css(styles.linkStyles) }
										to={ `/post-detail/${post.id}` }
									>
										<PostCard post={ post } />
									</Link>
									)
								}
							})
						}
						<div className = { css(styles.paginationButtonsContainer) }>
							<button
								className = { css(styles.paginationButtons) } 
								onClick={() => {
									let add = 3*postInRow*(-1);
									changePostCounter(add, postInRow);  
								}}>
								Previous posts
							</button>
							<button
								className = { css(styles.paginationButtons, styles.nextButton) } 
								onClick={() => { 
									let add = 3*postInRow;
									changePostCounter(add, postInRow); 
								}}>
								Next posts
							</button>
						</div>
					</div>
				)}
			</div>
		}
	/>
);

const withLifeCycle = lifecycle({
	componentDidMount() {
		const { getPostsStart, postInRow, changePostCounter, changePostInRow } = this.props;
		
		getPostsStart();
		changePostInRow(window.innerWidth);
		
		if (window.innerWidth > 1440) {
			changePostCounter(9, 3);
		 } else if (window.innerWidth < 1440 && window.innerWidth > 960) {
			changePostCounter(6, 2);
		 } else if (window.innerWidth < 960) {
			changePostCounter(3, 1);
		 }
		
		window.addEventListener('resize', (event) => {
			changePostInRow(window.innerWidth);
		});

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

const initialState = () => ({
	postInRow: 3,
	postsCounter: 0,
});

const localStateChanged = {
    changePostInRow: ({postInRow}) => (innerWidth) => {
		 if (innerWidth > 1440) {
			return {postInRow: 3}
		 } else if (innerWidth < 1440 && innerWidth > 960) {
			return {postInRow: 2}
		 } else if (innerWidth < 960) {
			return {postInRow: 1}
		 }
	 },

	 changePostCounter: ({postsCounter}) => (add, postInRow) => { 
		 if ((postsCounter + add) > 100) {
			return ({postsCounter: 100})
		 } else if ((postsCounter + add) < postInRow*3) {
		 	return ({postsCounter: postInRow*3})
		} else {
			return ({postsCounter: postsCounter + add})
		}
	},
};

const stateComponent = withStateHandlers(
    initialState,
    localStateChanged,
);

const withPropTypes = setPropTypes({
	postsLoading: PropTypes.bool.isRequired,
	posts: PropTypes.arrayOf(PropTypes.object).isRequired,
});

const composeHoc = compose(
	stateComponent,
	reduxConnect,
	withLifeCycle,
	withPropTypes,
);

export default composeHoc(Posts);
