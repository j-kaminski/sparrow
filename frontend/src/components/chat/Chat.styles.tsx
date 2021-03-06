import { makeStyles } from '@mui/styles';

export const useChatStyles = makeStyles({
	root: {
		display: 'grid',
		gridTemplateRows: '1fr 50px',
	},
	messages: {
		color: 'white',
		backgroundColor: '#1d4452',
		display: 'flex',
		flexDirection: 'column',
		gap:'.5em'
	},
	input: {
		backgroundColor: 'white',
		p: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
});
