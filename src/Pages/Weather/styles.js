import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
	weatherWrapper: {
		width: '100%',
		height: '100%',
		overflow: 'auto',
	},
	weatherContainer: {
		width: 'calc(100% - 50px)',
		padding: '25px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	weatherProps: {
		width: '400px',
		display: 'flex',
		flexDirection: 'column',
	},
	weatherPropsItem: {
		textTransform: 'uppercase',
		color: 'white',
		fontSize: '17px',
		margin: '5px 0 5px 70px',
	},
	cityName: {
		textTransform: 'uppercase',
		color: 'white',
		fontSize: '24px',
		fontWeight: 'bold',
		margin: '5px',
	},
});
