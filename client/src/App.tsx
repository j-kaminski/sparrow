import React from 'react';
import { Login, Register } from './components/form/';
import { Home } from './components/home';
import { Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Auth } from './features/auth/';
import { useAppDispatch } from './redux/hooks';

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route
					path='/dashboard'
					element={
						<Auth>
							<Dashboard />
						</Auth>
					}
				/>

				<Route path='*' element={<Home />} />
			</Routes>
		</div>
	);
};
