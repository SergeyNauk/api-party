import { StyleSheet } from 'aphrodite';
import { color } from './../../Styles/cssConstants';

export const styles = StyleSheet.create({
	postCardWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '400px',
		height: '250px',
		backgroundColor: color.thirdColor,
		margin: '20px',
		color: color.secondColor,
		fontFamily: 'URW Chancery L, cursive',
		fontWeight: 'bold',
		boxSizing: 'border-box',
		cursor: 'pointer',
		':hover': {
			border: `solid 1px ${color.secondColor}`,
		},
	},
	postTitle: {
		fontSize: '24px',
		alignSelf: 'center',
		margin: '20px',
	},
	postBody: {
		fontSize: '16px',
		alignSelf: 'center',
		margin: '10px',
	},
});
