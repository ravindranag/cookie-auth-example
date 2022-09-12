import { Button, Stack, Typography } from "@mui/material";
import { useState, useLayoutEffect } from "react";
import { useSession } from "../lib/context/SessionProvider";


const AuthorizedView = () => {
	const { user, logOut } = useSession()
	const [siteName, setSiteName] = useState()

	useLayoutEffect(() => {
		const hostname = window.location.hostname
		console.log({hostname})
		setSiteName(hostname)
	}, [])

	return (
		<Stack
			gap='8px'
		>
			<Typography
				variant='h2'
			>
				You are logged in as { user.username }
			</Typography>
			<Typography>
				You are here: {siteName}
			</Typography>
			<Button
				sx={{
					height: '48px'
				}}
				onClick={logOut}
			>
				Log out
			</Button>
		</Stack>
	)
}
 
export default AuthorizedView;
