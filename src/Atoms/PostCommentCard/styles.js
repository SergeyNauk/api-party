import { StyleSheet } from 'aphrodite';
import { color } from './../../Styles/cssConstants';

export const styles = StyleSheet.create({
	postCommentCardWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '400px',
		height: '250px',
		backgroundColor: color.thirdColor,
		marginBottom: '20px',
		color: color.secondColor,
		fontFamily: 'URW Chancery L, cursive',
		fontWeight: 'bold',
		boxSizing: 'border-box',
		':hover': {
			border: `solid 1px ${color.secondColor}`,
		},
	},
	postCommentCardTitle: {
		fontSize: '24px',
		alignSelf: 'center',
		margin: '10px',
	},
	postCommentCardBody: {
		fontSize: '16px',
		alignSelf: 'center',
		margin: '5px',
	},
	postNameEmail: {
		fontSize: '16px',
		alignSelf: 'flex-start',
		margin: '5px',
	},
});
