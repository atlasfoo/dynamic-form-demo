import { Avatar, Box, Container, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Copyright } from '@mui/icons-material'
import { DynamicValidation } from '../components/Forms'

const DynamicValidationView = () => {
	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<DynamicValidation />
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	)
}

export default DynamicValidationView
