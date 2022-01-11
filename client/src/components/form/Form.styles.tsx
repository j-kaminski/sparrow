import { makeStyles } from '@mui/styles';

export const useFormStyles = makeStyles({
	formContainer: {
		padding: '2em',
		display: 'flex',
		flexDirection: 'column',
		gap: '2em',
	},
	form: {
		minWidth: '330px',
		display: 'flex',
		flexDirection: 'column',
		gap: '1em',
	},

	link: {
		textDecoration: 'none',
		color: 'inherit',
		'&:hover': {
			color: 'red',
		},
	},
});
