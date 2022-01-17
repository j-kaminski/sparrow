import { makeStyles } from '@mui/styles';

export const useChatStyles = makeStyles({
	root: {
		display: 'grid',
		gridTemplateRows: '800px 50px',
	},
	messages: {
		color: 'white',
		backgroundColor: '#1d4452',
	},
	input: {
		backgroundColor: 'white',
		p: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
});
