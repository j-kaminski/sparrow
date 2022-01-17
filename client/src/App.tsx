import React from 'react';
import { Login, Register } from './components/form/';
import { Home } from './components/home';
import { Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { AuthProvider } from './features/auth/';
import { SocketProvider } from './features/socket/';
import { useAppDispatch } from './redux/hooks';

//TODO: Wrap routes /login and /register in one component (problem with proper routing urls)

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route
					path='/Dashboard'
					element={
						<AuthProvider>
							<SocketProvider>
								<Dashboard />
							</SocketProvider>
						</AuthProvider>
					}
				/>

				<Route path='*' element={<Home />} />
			</Routes>
		</div>
	);
};
