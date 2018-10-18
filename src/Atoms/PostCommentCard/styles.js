import { StyleSheet } from 'aphrodite';
import { color } from './../../Styles/cssConstants';

export const styles = StyleSheet.create({
	postCommentCardWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '400px',
		height: '250px',
		backgroundColor: color.thirdColor,
		margin: '12px 0 10px 0',
		color: 'white',
		fontFamily: 'URW Chancery L, cursive',
		fontWeight: 'bold',
		boxSizing: 'border-box',
		border: 'solid 1px white' ,
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
