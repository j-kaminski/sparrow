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

const Message = ({ children }: any) => {
	return <div>{children}</div>;
};

type ChatProps = {
	channelName: string;
};

export const Chat = ({ channelName }: ChatProps) => {
	const styles = useChatStyles();
	const [inputMessage, setInputMessage] = useState<string>('');

	const handleChangeInputMessage = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setInputMessage(event.target.value);
	};

	const handleSendMessage = (event: any) => {
		event.preventDefault();
		console.log(inputMessage);
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
