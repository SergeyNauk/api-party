import { StyleSheet } from 'aphrodite';

import { color } from './../../Styles/cssConstants';

export const styles = StyleSheet.create({
	buttonHomeWrapper: {
		position: 'absolute',
		left: '25px',
		top: '110px',
	},

	buttomHomeStyles: {
		width: '80px',
		height: '30px',
		borderRadius: '10px',
		outline: 0,
		color: 'white',
		backgroundColor: color.mainColor,
		fontSize: '14px',
		fontWeight: 'bold',
	},
});
