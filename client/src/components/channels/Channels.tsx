import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Tabs,
	Typography,
	Tab,
	Box,
	Button,
	TextField,
	FormControl,
	InputAdornment,
	Modal,
} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { authSelector } from '../../features/auth/';
import { tempToggleAuth } from '../../features/auth';
import { connectWebSocket } from '../../features/socket';
import TagIcon from '@mui/icons-material/Tag';
import { Chat } from '../chat';
import { useChannelsStyles } from '.';

const tempChannelsList = Array(30)
	.fill({})
	.map((c: any, i: any) => {
		return {
			id: `${i}`,
			label: `# Kanal ${i}`,
			channelName: `kanal${i}`,
		};
	});

export const Channels = () => {
	const dispatch = useAppDispatch();
	const styles = useChannelsStyles();
	const [currentChannel, setCurrentChannel] = useState<number>(0);
	const [listChannels, setListChannels] = useState(tempChannelsList);
	const [newChannelInput, setNewChannelInput] = useState<string>('');
	const [createChannelInput, setCreateChannelInput] = useState<string>('');

	const [openModal, setOpenModal] = useState<boolean>(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	const handleChangeChannel = (event: SyntheticEvent, newChannel: number) => {
		setCurrentChannel(newChannel);
	};

	const handleChangeNewChannel = (event: any) =>
		setNewChannelInput(event.target.value);

	const handleChangeCreateChannel = (event: any) =>
		setCreateChannelInput(event.target.value);

	const createNewChannel = () => {
		setCreateChannelInput('');

		handleCloseModal();
	};

	const joinToNewChannel = () => {
		dispatch(connectWebSocket(newChannelInput));
		setNewChannelInput('');
	};

	return (
		<div className={styles.root}>
			<Modal
				open={openModal}
				onClose={handleCloseModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box className={styles.modal}>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
					>
						Create a new channel
					</Typography>

					<TextField
						label='New channel'
						onChange={handleChangeCreateChannel}
						value={createChannelInput}
						sx={{ bgcolor: 'white' }}
						color='secondary'
						InputProps={{
							endAdornment: (
								<Button
									onClick={createNewChannel}
									color='secondary'
									variant='outlined'
									value={createChannelInput}
									onChange={handleChangeCreateChannel}
								>
									Create
								</Button>
							),
						}}
						variant='filled'
					/>
				</Box>
			</Modal>
			<div className={styles.channels}>
				<Button
					variant='contained'
					sx={{ m: 2 }}
					onClick={handleOpenModal}
				>
					Create channel
				</Button>
				<h2>Find a new channel</h2>
				<TextField
					label='New channel'
					onChange={handleChangeNewChannel}
					value={newChannelInput}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<TagIcon />
							</InputAdornment>
						),
						endAdornment: (
							<Button
								onClick={joinToNewChannel}
								sx={{ color: 'white' }}
							>
								Join
							</Button>
						),
					}}
					variant='filled'
				/>

				<h2>Your channels</h2>
				<div className={styles.channelsList}>
					<Tabs
						sx={{ height: 600 }}
						orientation='vertical'
						variant='scrollable'
						value={currentChannel}
						onChange={handleChangeChannel}
					>
						{listChannels.map((c) => (
							<Tab
								key={c.id}
								label={c.label}
								id={c.id}
								disableRipple
							/>
						))}
					</Tabs>
				</div>
			</div>
			<Chat channelName={listChannels[currentChannel].channelName} />
			<div>
				<h2>Users online</h2>
				<div className={styles.users}>
					<div>IMG nickname</div>
					<div>IMG nickname</div>
					<div>IMG nickname</div>
					<div>IMG nickname</div>
				</div>
			</div>
		</div>
	);
};
