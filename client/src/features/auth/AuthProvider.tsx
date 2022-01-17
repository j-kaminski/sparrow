import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { authSelector } from '.';
import { Navigate, useLocation } from 'react-router-dom';

//TODO: Type Reactnode to children

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
	const location = useLocation();
	const authenticated = useAppSelector(authSelector);

	if (authenticated) {
		return children;
	}

	return <Navigate to='/login' state={{ from: location }} replace />;
};
