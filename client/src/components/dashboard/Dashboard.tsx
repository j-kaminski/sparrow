import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { authSelector } from '../../features/auth/';
import { tempToggleAuth } from '../../features/auth';
import { Chat } from '../../features/chat/';
import { useDashboardStyles } from '.';

export const Dashboard = () => {
	const dispatch = useAppDispatch();
	const styles = useDashboardStyles();

	return (
		<div className={styles.root}>
			<Box>
				<h1>here wil bee some nice side bar ;)))))))))))</h1>
				<h1>here wil bee some nice side bar ;)))))))))))</h1>
				<h1>here wil bee some nice side bar ;)))))))))))</h1>
				<h1>here wil bee some nice side bar ;)))))))))))</h1>
				<h1>here wil bee some nice side bar ;)))))))))))</h1>
			</Box>
			<Chat />

			<Button
				variant='contained'
				color='error'
				onClick={() => dispatch(tempToggleAuth())}
				sx={{ position: 'absolute', right: '10px', top: '10px' }}
			>
				Logout ;)
			</Button>
		</div>
	);
};
