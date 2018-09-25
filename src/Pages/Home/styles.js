import { StyleSheet } from 'aphrodite';
import { mediaQuery } from './../../Styles/cssConstants';

export const styles = StyleSheet.create({
	appDescription: {
		fontWeight: 'bold',
		fontSize: '24px',
		fontFamily: 'cursive',
		lineHeight: '30px',
		color: 'white',
		padding: '20px',

		[mediaQuery.medium]: {
			fontSize: '22px',
			lineHeight: '26px',
		},

		[mediaQuery.small]: {
			fontWeight: 'normal',
			fontSize: '20px',
			lineHeight: '24px',
		}
	},
});
