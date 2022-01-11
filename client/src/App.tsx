import React from 'react';
import { Form, Login, Register } from './components/form/';
import { Home } from './components/home';
import { Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Auth } from './features/auth/';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
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
			</Routes>
		</div>
	);
};
