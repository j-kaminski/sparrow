import React from 'react';
import { useChatStyles } from '.';
import {
	Paper,
	InputBase,
	IconButton,
	Divider,
	Stack,
	Box,
	TextField,
	Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Message = () => {
	return <div>Hello!</div>;
};

export const Chat = () => {
	const styles = useChatStyles();
	return (
		<div className={styles.root}>
			<div className={styles.messages}>
				<Stack>
					<Message />
				</Stack>
			</div>

			<Paper
				component='form'
				sx={{
					p: '2px 4px',
					display: 'flex',
					alignItems: 'center',
					width: 800,
				}}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder='Send new message!'
				/>
				<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
				<IconButton
					color='primary'
					sx={{ p: '10px' }}
					aria-label='directions'
				>
					<SendIcon />
				</IconButton>
			</Paper>
		</div>
	);
};
