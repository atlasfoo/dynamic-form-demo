import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import Navigation from './routes/Navigation'

const theme = createTheme()

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navigation />
			</ThemeProvider>
		</>
	)
}

export default App
