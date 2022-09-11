import { Button, FormControl, Input, InputLabel, Stack } from '@mui/material'
import Cookies from 'js-cookie'
import { useLayoutEffect, useState } from 'react'

export default function Home() {
	const [siteName, setSiteName] = useState()
	const [message, setMessage] = useState()

	useLayoutEffect(() => {
		const hostname = window.location.hostname
		console.log({hostname})
		setSiteName(hostname)
	}, [])

	const handleMessageChange = e => {
		setMessage(e.target.value)
	}

	const handleMessage = () => {
		Cookies.set('messageForRV', message, {
			domain: `rv.${process.env.DOMAIN}`
		})
	}

	return (
		<Stack>
			You are here: { siteName }
			<FormControl
				sx={{
					maxWidth: 500,
					gap: '12px'
				}}
			>
				<InputLabel
					shrink
				>
					Message for rv.localhost
				</InputLabel>
				<Input 
					value={message}
					onChange={handleMessageChange}
					sx={{
						padding: '10px 16px',
						border: '1px solid black',
						borderRadius: '8px'
					}}
					disableUnderline
					endAdornment={
						<Button
							variant='contained'
							onClick={handleMessage}
						>
							Send
						</Button>
					}
				/>
			</FormControl>
		</Stack>
  	)
}
