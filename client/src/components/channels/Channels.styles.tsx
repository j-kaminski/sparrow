import { makeStyles } from '@mui/styles';
//TODO: Use colors from theme

export const useChannelsStyles = makeStyles({
	root: {
		display: 'grid',
		gridTemplateColumns: '0.2fr 0.7fr 0.15fr',
		height: '100%',
		'& > *': {
			boxSizing: 'border-box',
			borderLeft: '1px solid gray',
		},
	},
	channels: {},

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
});
