import React, { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tabs, Tab, Box, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { authSelector } from '../../features/auth/';
import { tempToggleAuth } from '../../features/auth';
import { useDashboardStyles } from '.';
import { Channels } from '../channels';
import {AppBar} from "../appbar";

enum TabsEnum {
	CHANNELS,
	MESSAGES,
	SETTINGS,
}

type AppTabProps = {
	label: string;
	component: () => JSX.Element;
};

const AppTabs: Array<AppTabProps> = [
	{
		label: 'Channels',
		component: Channels,
	},
	{
		label: 'Messages',
		component: () => <div>messages</div>,
	},
	{
		label: 'Settings',
		component: () => <div>settings</div>,
	},
];

export const Dashboard = () => {
	const dispatch = useAppDispatch();
	const styles = useDashboardStyles();
	const [currentTab, setCurrentTab] = useState<number>(0);

	const handleChangeTab = (event: SyntheticEvent, newTab: number) => {
		setCurrentTab(newTab);
	};


	const someOtherTab = () => {


	}

	return (
		<div className={styles.root}>

			<AppBar />
			<div className={styles.container}>
			<Tabs
				className={styles.tabs}
				orientation='vertical'
				value={currentTab}
				onChange={handleChangeTab}
			>
				<Tab
					className={styles.tab}
					label={AppTabs[TabsEnum.CHANNELS].label}
					id={String(AppTabs[TabsEnum.CHANNELS])}
				/>
				<Tab
					label={AppTabs[TabsEnum.MESSAGES].label}
					id={String(AppTabs[TabsEnum.MESSAGES])}
				/>
				<Tab
					label={AppTabs[TabsEnum.SETTINGS].label}
					id={String(AppTabs[TabsEnum.SETTINGS])}
				/>
			</Tabs>
			<div>
				<div className={styles.content}>
					{currentTab === TabsEnum.CHANNELS && <Channels />}
					{currentTab === TabsEnum.MESSAGES && <>messages</>}
					{currentTab === TabsEnum.SETTINGS && <>settings</>}
				</div>
			</div>
			</div>
		</div>
	);
};
