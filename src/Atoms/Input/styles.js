import { StyleSheet } from 'aphrodite';
import { color } from '../../Styles/cssConstants';

export const styles = StyleSheet.create({
	inputStyles: {
		padding: '10px',
		fontSize: '16px',
		border: '2px solid rgba(255, 255, 255, .5)',
		background: color.mainColor,
		borderRadius: '10px',
		outline: 'none',
		color: 'white',
		width: '210px',
		marginBottom: '10px',
	},
	sendButton: {
		width: '130px',
		height: '40px',
		borderRadius: '10px',
		outline: 0,
		color: 'white',
		backgroundColor: color.mainColor,
		fontSize: '16px',
		fontWeight: 'bold',
		marginLeft: '30px',
	},
});
