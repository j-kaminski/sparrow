import React from 'react';
import { useFormik } from 'formik';
import { Container, Typography, Button, TextField, Card } from '@mui/material';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { useFormStyles, validationSchemaLogin } from '.';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { authSelector } from '../../features/auth/';
import { tempToggleAuth } from '../../features/auth';
import axios from 'axios';

export const Login = () => {
	const classes = useFormStyles();
	const location = useLocation();
	const authenticated = useAppSelector(authSelector);
	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchemaLogin,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			dispatch(tempToggleAuth());
			axios.post(
				'http://localhost:8000/api/login',
				JSON.stringify(values, null, 2)
			);
		},
	});

	if (authenticated)
		return <Navigate to='/Dashboard' state={{ from: location }} replace />;

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
			<Card className={classes.formContainer}>
				<Typography sx={{color: 'black'}} variant='h4'>Login</Typography>
				<form className={classes.form} onSubmit={formik.handleSubmit}>
					<TextField
						fullWidth
						id='email'
						name='email'
						label='Email'
						value={formik.values.email}
						onChange={formik.handleChange}
						error={
							formik.touched.email && Boolean(formik.errors.email)
						}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<TextField
						fullWidth
						id='password'
						name='password'
						label='Password'
						type='password'
						value={formik.values.password}
						onChange={formik.handleChange}
						error={
							formik.touched.password &&
							Boolean(formik.errors.password)
						}
						helperText={
							formik.touched.password && formik.errors.password
						}
					/>
					<Button color='primary' variant='contained' type='submit'>
						Login
					</Button>
				</form>
				<Link className={classes.link} to='/register'>
					Create account
				</Link>
			</Card>
		</Container>
	);
};
