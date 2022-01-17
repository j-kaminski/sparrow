import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Tabs,
	Tab,
	Box,
	Button,
	TextField,
	FormControl,
	InputAdornment,
} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { authSelector } from '../../features/auth/';
import { tempToggleAuth } from '../../features/auth';
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

	const handleChangeChannel = (event: SyntheticEvent, newChannel: number) => {
		setCurrentChannel(newChannel);
	};

	return (
		<div className={styles.root}>
			<div className={styles.channels}>
				<h2>Find a new channel</h2>
				<TextField
					label='New channel'
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<TagIcon />
							</InputAdornment>
						),
						endAdornment: (
							<Button sx={{ color: 'white' }}>Join</Button>
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
