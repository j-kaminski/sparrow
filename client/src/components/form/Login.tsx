import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Typography, Button, TextField, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormStyles } from '.';

type SchemaLogin = {
	email: string;
	password: string;
};

const minLengthPassword = 4;
const validationSchema: yup.SchemaOf<SchemaLogin> = yup.object({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string()
		.min(
			minLengthPassword,
			`Password should be of minimum ${minLengthPassword} characters length`
		)
		.required('Password is required'),
});

export const Login = () => {
	const classes = useFormStyles();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<Card className={classes.formContainer}>
			<Typography variant='h4'>Login</Typography>
			<form className={classes.form} onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id='email'
					name='email'
					label='Email'
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
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
				Register
			</Link>
		</Card>
	);
};
