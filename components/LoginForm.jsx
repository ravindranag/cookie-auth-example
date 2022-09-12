import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useSession } from "../lib/context/SessionProvider";

const LoginForm = () => {
	const [loading, setLoading] = useState(false)
	const { logIn } = useSession()

	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		onSubmit: async (values) => {
			setLoading(true)
			console.log(values)
			const result = await logIn(values)
			console.log('result', result)
			setLoading(false)
		}
	})

	return (
		<Stack
			padding='32px'
			gap='24px'
			maxWidth='500px'
			width='100%'
			margin='0 auto'
		>
			<Typography
				variant='h3'
				textAlign='center'
			>
				Log in to continue
			</Typography>
			<TextField 
				label='Username'
				name='username'
				value={formik.values.username}
				onChange={formik.handleChange}
			/>
			<TextField 
				type='password'
				label='Password'
				name='password'
				value={formik.values.password}
				onChange={formik.handleChange}
			/>
			<Button
				variant='contained'
				onClick={formik.handleSubmit}
				sx={{
					height: '48px'
				}}
			>
				{ !loading ? 'Log in' : <CircularProgress size={16} color='white' /> }
			</Button>
		</Stack>
	)
}
 
export default LoginForm;
