import { StyleSheet } from 'aphrodite';

import { color, mediaQuery } from './../../Styles/cssConstants';

export const styles = StyleSheet.create({
	pageContainerWrapper: {
		position: 'relative',
		overflow: 'hidden',
		width: '1440px',
		height: '100%',
		margin: '0 auto 0 auto',
		backgroundColor: color.mainColor,

		[mediaQuery.medium]: {
			width: '960px',
		},

		[mediaQuery.small]: {
			width: '640px',
		},
	},
});
