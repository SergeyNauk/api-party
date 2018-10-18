import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
	postDetailWrapper: {
		width: '100%',
		height: '100%',
		overflow: 'auto',
	},
	postDetailContainer: {
		width: 'calc(100% - 50px)',
		padding: '5px 25px 25px 25px',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
});
