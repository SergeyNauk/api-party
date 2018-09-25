import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

import connect from 'react-redux/es/connect/connect';
import { compose, lifecycle, setPropTypes } from 'recompose';

import { getPostDetailStart } from './actions';

import { toast } from 'react-toastify';

import { LoadingComponent } from '../../Atoms/LoadingComponent';
import { PageContainer } from '../../Organisms/PageContainer';
import { PostCommentCard } from '../../Atoms/PostCommentCard';

const PostDetail = ({ 
	postDetailLoading, 
	postDetail,
	language
}) => (
	<PageContainer
		template={
			<div className={ css(styles.postDetailWrapper) }>
				{postDetailLoading ? (
					<LoadingComponent />
				) : (
					<div className={ css(styles.postDetailContainer) }>
						{ postDetail.map((comment, index) => (
							<PostCommentCard key={ index } comment={ comment } />
						))}
					</div>
				)}
			</div>
		}
	/>
);

const withLifeCycle = lifecycle({
	componentDidMount() {
		const { getPostDetailStart, history } = this.props;
		const path = Number(this.props.match.params.id);

		if (path != NaN && path > 0 && path <= 100) {
			getPostDetailStart(this.props.match.params.id);
		} else {
			toast.error('incorrect path');
			history.push('/posts');
		}
	},
});

const reduxConnect = connect(
	state => {
		let language = state.switchLanguageReducer.language;
		let postDetail = state.postDetailReducer.postDetail;
		let postDetailLoading = state.postDetailReducer.postDetailLoading;

		return {
			language,
			postDetail,
			postDetailLoading,
		};
	},
	{
		getPostDetailStart,
	}
);

const withPropTypes = setPropTypes({
	language: PropTypes.string.isRequired,
	postDetailLoading: PropTypes.bool.isRequired,
	postDetail: PropTypes.arrayOf(PropTypes.object).isRequired,
});

const composeHoc = compose(
	reduxConnect,
	withLifeCycle,
	withRouter,
	withPropTypes
);

export default composeHoc(PostDetail);
