import { ThemeProvider } from "@mui/material"
import { SessionProvider } from "../lib/context/SessionProvider"
import theme from "../theme/theme"

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider
			theme={theme}
		>
			<SessionProvider>
				<Component {...pageProps} />
			</SessionProvider>
		</ThemeProvider>
  	)
}

export default MyApp
