import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { connectWebSocket } from '.';

//TODO: Type Reactnode to children

export const SocketProvider = ({ children }: { children: JSX.Element }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(connectWebSocket());
	}, [dispatch]);

	return <>{children}</>;
};
