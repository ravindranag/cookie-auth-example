import Cookies from "js-cookie";
import { createContext, useState, useContext } from "react";
import api from '../axios/auth'

const SessionContext = createContext()

const useSession = () => useContext(SessionContext)

const SessionProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	async function logIn(user) {
		let success
		await api.user.login(user)
			.then(data => {
				setUser(data)
				success = '1'
				Cookies.set('username', data.username, {
					domain: `.${process.env.DOMAIN}`
				})
			})
			.catch(error => {
				console.log('error signing in', error)
				success = '0'
			})
		return success
	}

	return (
		<SessionContext.Provider
			value={{
				user,
				logIn
			}}
		>
			{ children }
		</SessionContext.Provider>
	)
}
 
export {
	SessionProvider,
	useSession
}
