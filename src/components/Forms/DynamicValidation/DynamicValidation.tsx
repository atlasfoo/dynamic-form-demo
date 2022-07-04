import {
	Box,
	Grid,
	FormControlLabel,
	Checkbox,
	Button,
	Link,
} from '@mui/material'
import { Formik, Form } from 'formik'
import CustomTextField from '../../CustomTextField'
import * as Yup from 'yup'
import {
	dynamicValidationFormInitialValues,
	DynamicValidationFormModel,
} from './DynamicValidation.values'
import { useState, useEffect } from 'react'
import { getDynamicValidation } from '../../../utils/DynaValidation'

const DynamicValidation = () => {
	const [validationSchema, setValidationSchema] = useState({})

	useEffect(() => {
		getDynamicValidation(1).then((res) => setValidationSchema(Yup.object(res)))
	}, [])

	useEffect(() => console.log(validationSchema), [validationSchema])

	return (
		<Formik<DynamicValidationFormModel>
			initialValues={dynamicValidationFormInitialValues}
			onSubmit={(values, { setSubmitting }) => console.log(values)}
			validationSchema={validationSchema}
		>
			{(formik) => (
				<Form noValidate>
					<Box sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<CustomTextField
									id="firstName"
									label="First name"
									name="firstName"
									fullWidth
									type="text"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<CustomTextField
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
									type="text"
								/>
							</Grid>
							<Grid item xs={12}>
								<CustomTextField
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									type="email"
								/>
							</Grid>
							<Grid item xs={12}>
								<CustomTextField
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox value="allowExtraEmails" color="primary" />
									}
									label="I want to receive inspiration, marketing promotions and updates via email."
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="#" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Form>
			)}
		</Formik>
	)
}

export default DynamicValidation
