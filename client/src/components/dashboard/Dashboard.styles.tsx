import { makeStyles } from '@mui/styles';

export const useDashboardStyles = makeStyles({
	root: {
		display: 'grid',
		gridTemplateColumns: '200px 1fr',
		minHeight: '100vh',
	},

	tabs: {
		display: 'flex',
	},

	content: {
		width: '100%',
	},
});
