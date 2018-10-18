import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';

import { I18n } from './../../I18n';

import { getWeatherStart } from './actions';

import connect from 'react-redux/es/connect/connect';
import { compose, lifecycle, setPropTypes } from 'recompose';

import { Image } from './../../Atoms/Image';
import { PageContainer } from '../../Organisms/PageContainer';
import { LoadingComponent } from '../../Atoms/LoadingComponent';

const Weather = ({
	language,
	weather,
	weatherImg,
	weatherLoading,
	temp,
	tempMax,
	tempMin,
	windSpeed,
	pressure,
}) => (
	<PageContainer
		template={
			<div className={css(styles.weatherWrapper)}>
				{weatherLoading ? (
					<LoadingComponent />
				) : (
					weather.main && (
						<div className={css(styles.weatherContainer)}>
							<span className={css(styles.cityName)}>
								{I18n.t('city_name')} {weather.name}{' '}
							</span>
							<Image src={weatherImg} />
							<div className={css(styles.weatherProps)}>
								<span className={css(styles.weatherPropsItem)}>
									{I18n.t('temp_now')} {temp} &#8451;
								</span>
								<span className={css(styles.weatherPropsItem)}>
									{I18n.t('temp_max')} {tempMax} &#8451;
								</span>
								<span className={css(styles.weatherPropsItem)}>
									{I18n.t('temp_min')} {tempMin} &#8451;
								</span>
								<span className={css(styles.weatherPropsItem)}>
									{I18n.t('wind_speed')} {windSpeed} {I18n.t('m_sec')}
								</span>
								<span className={css(styles.weatherPropsItem)}>
									{I18n.t('pressure')} {pressure} {I18n.t('mm_hg')}
								</span>
							</div>
						</div>
					)
				)}
			</div>
		}
	/>
);

const withLifeCycle = lifecycle({
	componentDidMount() {
		const { getWeatherStart } = this.props;

		getWeatherStart();
	},
});

const reduxConnect = connect(
	state => {
		let language = state.switchLanguageReducer.language;
		let weather = state.weatherReducer.weather;
		let weatherLoading = state.weatherReducer.weatherLoading;
		let weatherImg =
			weather.weather !== undefined
				? `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
				: `http://openweathermap.org/img/w/01d.png`;
		let temp =
			weather.main !== undefined ? (weather.main.temp - 273.15).toFixed(1) : 0;
		let tempMax =
			weather.main !== undefined
				? (weather.main.temp_max - 273.15).toFixed(1)
				: 0;
		let tempMin =
			weather.main !== undefined
				? (weather.main.temp_min - 273.15).toFixed(1)
				: 0;
		let windSpeed = weather.wind !== undefined ? weather.wind.speed : 0;
		let pressure = weather.main !== undefined ? weather.main.pressure : 0;

		return {
			language,
			weather,
			weatherLoading,
			weatherImg,
			temp,
			tempMax,
			tempMin,
			windSpeed,
			pressure,
		};
	},
	{
		getWeatherStart,
	}
);

const withPropTypes = setPropTypes({
	language: PropTypes.string.isRequired,
	weatherLoading: PropTypes.bool.isRequired,
	weather: PropTypes.shape({
		weatherImg: PropTypes.string,
		temp: PropTypes.string,
		tempMax: PropTypes.number,
		tempMin: PropTypes.number,
		windSpeed: PropTypes.number,
		pressure: PropTypes.number,
	}).isRequired,
});

const composeHoc = compose(
	reduxConnect,
	withLifeCycle,
	withPropTypes
);

export default composeHoc(Weather);
