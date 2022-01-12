import * as yup from 'yup';

type SchemaLogin = {
	email: string;
	password: string;
};

type SchemaRegister = {
	email: string;
	password: string;
	password2: string;
};

const minLengthPassword = 4;
export const validationSchemaLogin: yup.SchemaOf<SchemaLogin> = yup.object({
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

export const validationSchemaRegister: yup.SchemaOf<SchemaRegister> =
	yup.object({
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
