import { StyleSheet } from 'aphrodite';

import { color } from '../../Styles/cssConstants';

export const styles = StyleSheet.create({
	filmInfoWrapper: {
		width: '100%',
		height: 'calc(100% - 145px)',
		overflow: 'auto',
	},
	filmInfoContainer: {
		width: 'calc(100% - 50px)',
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		overflow: 'auto',
	},
	filmInfoProps: {
		width: '400px',
		display: 'flex',
		flexDirection: 'column',
	},
	filmInfoItem: {
		textTransform: 'uppercase',
		color: 'white',
		fontSize: '16px',
		margin: '4px',
	},
	filmInfoError: {
		textTransform: 'uppercase',
		color: 'red',
		fontSize: '24px',
		marginTop: '40px',
	},
});
