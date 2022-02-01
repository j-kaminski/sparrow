import { makeStyles } from '@mui/styles';

export const useDashboardStyles = makeStyles({
	root: {
		minHeight: '100vh',
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	container: {
		display: 'grid',
		gridTemplateColumns: '200px 1fr',
		flexGrow: '1'
	},

	tabs: {
		marginTop: '1em',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tab: {
		backgroundColor: 'red'
	},

	content: {
		width: '100%',
		height: '100%'
	},
});
