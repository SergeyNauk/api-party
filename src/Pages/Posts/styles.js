import { StyleSheet } from 'aphrodite';
import { color } from './../../Styles/cssConstants';

export const styles = StyleSheet.create({
	postsWrapper: {
		width: '100%',
		height: 'calc(100% - 150px)',
		overflow: 'auto',
	},
	postsContainer: {
		width: 'calc(100% - 50px)',
		overflow: 'auto',
		padding: '15px 25px 0px 25px',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	linkStyles: {
		textDecoration: 'none',
	},
	paginationButtonsContainer: {
		position: 'absolute',
		bottom: '15px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
	nextButton: {
		marginLeft: '50px',
	},
	paginationButtons: {
		width: '150px',
        height: '60px',
        backgroundColor: color.backgroundPostColor,
        borderRadius: '15px',
        outline: 'none',
        color: color.secondColor,
		fontSize: '18px',
		fontWeight: 'bold', 
	}
});
