import React from 'react';
import { useFormik } from 'formik';
import { Container, Typography, Button, TextField, Card } from '@mui/material';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { useFormStyles, validationSchemaRegister } from '.';
import { useAppSelector } from '../../redux/hooks';
import { authSelector } from '../../features/auth/';

export const Register = () => {
	const classes = useFormStyles();
	const location = useLocation();
	const authenticated = useAppSelector(authSelector);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			password2: '',
		},
		validationSchema: validationSchemaRegister,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
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
				<Typography variant='h4'>Create account</Typography>
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
					<TextField
						fullWidth
						id='password2'
						name='password2'
						label='Confirm Password'
						type='password'
						value={formik.values.password2}
						onChange={formik.handleChange}
						error={
							formik.touched.password2 &&
							Boolean(formik.errors.password2)
						}
						helperText={
							formik.touched.password2 && formik.errors.password2
						}
					/>
					<Button
						color='primary'
						variant='contained'
						fullWidth
						type='submit'
					>
						Submit
					</Button>
				</form>
				<Link className={classes.link} to='/login'>
					Login
				</Link>
			</Card>
		</Container>
	);
};
