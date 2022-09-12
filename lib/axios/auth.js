import axios from "axios";

const AuthAPIInstance = axios.create({
	baseURL: '/api'
})

AuthAPIInstance.interceptors.response.use(response => {
	return response.data
}, err => {
	Promise.reject(err.response.data)
})

export default {
	user: {
		login: (user) => AuthAPIInstance.post('login/', user)
	}
}
