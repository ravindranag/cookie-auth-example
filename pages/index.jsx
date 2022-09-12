import { Stack } from '@mui/material'
import AuthorizedView from '../components/AuthorizedView'
import LoginForm from '../components/LoginForm'
import { useSession } from '../lib/context/SessionProvider'

export default function Home() {
	const { user } = useSession()

	return (
		<Stack>
			{ !user && <LoginForm /> }
			{ user && <AuthorizedView /> }
		</Stack>
  	)
}
