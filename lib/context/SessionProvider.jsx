import Cookies from "js-cookie";
import { createContext, useState, useContext, useEffect } from "react";
import api from '../axios/auth'

const SessionContext = createContext()

const useSession = () => useContext(SessionContext)

const SessionProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const token = Cookies.get('token')
		if(token) {
			setUser(Cookies.get('username'))
		}
	}, [])

	async function logIn(user) {
		let success
		await api.user.login(user)
			.then(data => {
				setUser(data.username)
				success = '1'
				Cookies.set('username', data.username, {
					domain: `.${process.env.DOMAIN}`
				})
				Cookies.set('token', data.token, {
					domain: `.${process.env.DOMAIN}`
				})
			})
			.catch(error => {
				console.log('error signing in', error)
				success = '0'
			})
		return success
	}

	async function logOut() {
		Cookies.remove('username', {
			domain: `.${process.env.DOMAIN}`
		})
		Cookies.remove('token', {
			domain: `.${process.env.DOMAIN}`
		})
		setUser(null)
	}

	return (
		<SessionContext.Provider
			value={{
				user,
				logIn,
				logOut
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
