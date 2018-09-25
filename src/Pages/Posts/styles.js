import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
	postsWrapper: {
		width: '100%',
		height: 'calc(100% - 150px)',
		overflow: 'auto',
	},
	postsContainer: {
		width: 'calc(100% - 50px)',
		overflow: 'auto',
		padding: '25px',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	linkStyles: {
		textDecoration: 'none',
	},
});
