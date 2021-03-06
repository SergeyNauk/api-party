import { color } from './../../Styles/cssConstants';

export const menuStyles = {
	bmBurgerButton: {
		position: 'absolute',
		width: '36px',
		height: '30px',
		left: '36px',
		top: '36px',
	},
	bmBurgerBars: {
		background: 'white',
	},
	bmCrossButton: {
		display: 'none',
		height: '24px',
		width: '24px',
	},
	bmCross: {
		background: '#bdc3c7',
	},
	bmMenu: {
		background: color.thirdColor,
		padding: '20px',
		fontSize: '1.15em',
		overflow: 'hidden',
	},
	bmMorphShape: {
		fill: 'white',
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '0px',
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)',
	},
	bmMenuWrap: {
		position: 'absolute',
	},
	bmItem: {
		display: 'inline-block',
		textDecoration: 'none',
		color: 'white',
		fontWeight: 'bold',
		fontSize: '18px',
		marginTop: '10px',
		fontFamily: 'URW Chancery L, cursive',
	},
	menuItemSmall: {
		textDecoration: 'none',
	},
};
