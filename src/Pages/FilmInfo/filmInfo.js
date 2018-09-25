import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

import { I18n } from './../../I18n';

import connect from 'react-redux/es/connect/connect';
import { compose, lifecycle, setPropTypes } from 'recompose';

import { getFilmInfoStart } from './actions';

import { Input } from './../../Atoms/Input';
import { Image } from './../../Atoms/Image';
import { PageContainer } from '../../Organisms/PageContainer';
import { LoadingComponent } from '../../Atoms/LoadingComponent';

const FilmInfo = ({
	language,
	filmInfoLoading,
	filmInfo,
	getFilmInfoStart,
}) => (
	<PageContainer
		template={
			<div className={ css(styles.filmInfoWrapper) }>
				{filmInfoLoading ? (
					<LoadingComponent />
				) : (
					<div className={ css(styles.filmInfoContainer) }>
						<Input actionFunc={ getFilmInfoStart } />
						<div>
							{ !filmInfo.Error ? (
								<Fragment>
									<Image src={ filmInfo.Poster } />
									<div className={ css(styles.filmInfoProps) }>
										<span className={ css(styles.filmInfoItem) }>
											{ I18n.t('film_title') } { filmInfo.Title }
										</span>
										<span className={ css(styles.filmInfoItem) }>
											{ I18n.t('film_year') } { filmInfo.Year }
										</span>
										<span className={ css(styles.filmInfoItem) }>
											{ I18n.t('film_runtime') } { filmInfo.Runtime }
										</span>
										<span className={ css(styles.filmInfoItem) }>
											{ I18n.t('film_rating') } { filmInfo.imdbRating }
										</span>
									</div>
								</Fragment>
							) : (
								<span className={ css(styles.filmInfoError) }>
									{ filmInfo.Error }
								</span>
							)}
						</div>
					</div>
				)}
			</div>
		}
	/>
);

const withLifeCycle = lifecycle({
	componentDidMount() {
		const { getFilmInfoStart } = this.props;

		getFilmInfoStart('Robocop');
	},
});

const reduxConnect = connect(
	state => {
		let language = state.switchLanguageReducer.language;
		let filmInfoLoading = state.filmInfoReducer.filmInfoLoading;
		let filmInfo = state.filmInfoReducer.filmInfo;

		return {
			language,
			filmInfoLoading,
			filmInfo,
		};
	},
	{
		getFilmInfoStart,
	}
);

const withPropTypes = setPropTypes({
	language: PropTypes.string.isRequired,
	filmInfoLoading: PropTypes.bool.isRequired,
	getFilmInfoStart: PropTypes.func.isRequired,
	filmInfo: PropTypes.object.isRequired,
});

const composeHoc = compose(
	reduxConnect,
	withLifeCycle,
	withPropTypes
);

export default composeHoc(FilmInfo);
