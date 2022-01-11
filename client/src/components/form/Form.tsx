import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Typography, Button, TextField, Container, Card } from '@mui/material';
import { Link as LinkMui } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import { useFormStyles } from '.';
import { StylesContext } from '@mui/styles';
import { Login, Register } from '.';

export const Form = () => {
	const classes = useFormStyles();
	return (
		<Container
			maxWidth='md'
			sx={{
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			disableGutters
		>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</Container>
	);
};
