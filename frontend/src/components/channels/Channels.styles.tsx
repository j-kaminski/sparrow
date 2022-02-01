import { makeStyles } from '@mui/styles';
//TODO: Use colors from theme

export const useChannelsStyles = makeStyles({
	root: {
		display: 'grid',
		gridTemplateColumns: '0.2fr 0.7fr 0.15fr',
		height: '100%',
		'& > *': {
			boxSizing: 'border-box',
		},
	},

	channels: {
		display: 'flex',
		flexDirection: 'column',
	},

	channelsList: {
		'& 	.MuiTab-root': {
			color: 'white',
			borderBottom: '0.1px dotted black',
			transition: 'all 0.3s',
			'&:hover': {
				color: 'white !important',
				opacity: 0.5,
			},
		},
		'& .MuiTabs-indicator': {
			display: 'none',
		},
		'& .Mui-selected': {
			color: 'white !important',
			backgroundColor: '#1a343d',
		},
	},
	users: {
		display: 'flex',
		flexDirection: 'column',
	},

	modal: {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '400',
		color: 'white',
		backgroundColor: '#00000040',
		borderRadius: '10px',
		boxShadow: '24',
		padding: '4em',
	},
});
