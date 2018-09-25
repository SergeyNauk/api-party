import { StyleSheet } from 'aphrodite';
import { color, mediaQuery } from './../../Styles/cssConstants';

export const styles = StyleSheet.create({
	headerWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '150px',
		backgroundColor: color.secondColor,
	},

	headerTitle: {
		color: 'white',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: '36px',
		fontFamily: 'URW Chancery L, cursive',

		[mediaQuery.medium]: {
			fontSize: '30px',
		},

		[mediaQuery.small]: {
			fontSize: '24px',
		},
	},
});
