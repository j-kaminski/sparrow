import { makeStyles } from '@mui/styles';

export const useHomeStyles = makeStyles({
	'@keyframes blinking': {
		'0%': {
			opacity: 0.5,
		},
		'50%': {
			opacity: 1,
		},
		'100%': {
			opacity: 0.5,
		},
	},

	root: {
		height: '100%',
		display: 'grid',
		gridTemplateRows: 'minmax(50px, auto) 90vh',

		'& ul': {
			listStyleType: 'none',
			margin: 0,
			padding: 0,
		},

		'& img': {
			animation: '$blinking 2000ms infinite',
		},
	},

	nav: {
		width: '100%',
		height: '100%',
		padding: '2em',
	},

	list: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
	},

	logo: {
		color: 'white',
		fontSize: '25px',
		letterSpacing: '2px',
		textDecoration: 'underline',
	},

	sparrow: {
		borderRadius: '20px',
		padding: '.4em',
		backgroundColor: '#fc8e08',
		textDecoration: 'none',
		color: '#383434',
		letterSpacing: '1px',
		fontWeight: 'bold',
		fontSize: '1.7em',
		transition: 'all .3s',
		'&:hover': {
			color: 'white',
			backgroundColor: '#7e4d11',
		},
	},

	content: {
		color: 'white',
		width: '100%',
		gap: '6em',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	joke: {
		width: '800px',
		minHeight: '150px',
		padding: '2em',
		borderRadius: '10px',
		 backgroundColor: 'rgba(255, 255, 255, .15)',
		 backdropFilter: 'blur(5px)'
	}

});
