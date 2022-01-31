import React, { useState } from 'react';
import { useChatStyles } from '.';
import {
	Paper,
	InputBase,
	Box,
	IconButton,
	Divider,
	Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch } from '../../redux/hooks';
import { sendMessage } from '../../features/socket';

const Message = ({ children }: any) => {
	return <div>{children}</div>;
};

type ChatProps = {
	channelName: string;
};

export const Chat = ({ channelName }: ChatProps) => {
	const dispatch = useAppDispatch();
	const styles = useChatStyles();
	const [inputMessage, setInputMessage] = useState<string>('');

	const handleChangeInputMessage = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setInputMessage(event.target.value);
	};

	const handleSendMessage = (event: any) => {
		event.preventDefault();
		dispatch(sendMessage(inputMessage));
		setInputMessage('');
	};

	return (
		<div className={styles.root}>
			<div className={styles.messages}>
				<Message>{channelName}</Message>
			</div>
			<form className={styles.input} onSubmit={handleSendMessage}>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder='Send new message!'
					onChange={handleChangeInputMessage}
					value={inputMessage}
					color='secondary'
				/>
				<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
				<IconButton
					color='primary'
					sx={{ p: '10px' }}
					aria-label='directions'
					type='submit'
				>
					<SendIcon />
				</IconButton>
			</form>
		</div>
	);
};
