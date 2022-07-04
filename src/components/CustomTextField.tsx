import { TextField } from '@mui/material'
import { useField } from 'formik'

interface Props {
	label: string
	name: string
	type?: 'text' | 'email' | 'password'
	placeholder?: string
	fullWidth?: boolean
	[x: string]: any
}

const CustomTextField = (props: Props) => {
	const [field, meta] = useField(props)
	return (
		<TextField
			{...field}
			{...props}
			error={meta.error !== undefined}
			helperText={meta.error ?? ''}
		/>
	)
}

export default CustomTextField
