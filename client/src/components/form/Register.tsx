import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Typography, Button, TextField, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormStyles } from '.';

type SchemaRegister = {
	email: string;
	password: string;
	password2: string;
};

const minLengthPassword = 4;
const validationSchema: yup.SchemaOf<SchemaRegister> = yup.object({
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
	password2: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Confirm password is required'),
});

export const Register = () => {
	const classes = useFormStyles();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			password2: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
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
	);
};
