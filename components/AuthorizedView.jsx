import { Stack, Typography } from "@mui/material";
import { useState, useLayoutEffect } from "react";
import { useSession } from "../lib/context/SessionProvider";


const AuthorizedView = () => {
	const { user } = useSession()
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
		</Stack>
	)
}
 
export default AuthorizedView;
