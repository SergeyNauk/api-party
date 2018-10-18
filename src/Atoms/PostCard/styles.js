import { StyleSheet } from 'aphrodite';
import { color } from './../../Styles/cssConstants';

export const styles = StyleSheet.create({
	postCardWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '400px',
		height: '225px',
		borderRadius: '10px',
		backgroundColor: color.backgroundPostColor,
		margin: '5px 20px 5px 20px',
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
		fontSize: '22px',
		alignSelf: 'center',
		margin: '5px 10px 5px 10px',
	},
	postBody: {
		fontSize: '15px',
		alignSelf: 'center',
		margin: '10px',
	},
});
