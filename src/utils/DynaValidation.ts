import * as Yup from 'yup'
import { FormSchema } from '../types/apiTypes'

export interface ValueType {
	[x: string]: any
}

export const getDynamicValidation = async (
	formId: Number
): Promise<ValueType> => {
	const formSchema: ValueType = {}

	// Get the form schema from the API
	const formValidationsRequest = await fetch(
		`https://06e635f4-4976-4589-b527-1b284067f95a.mock.pstmn.io/form-validations/${formId}`
	)

	const formValidations: FormSchema = await formValidationsRequest.json()

	// Loop through the form schema and add validation to the form schema
	formValidations.validation_fields.forEach((field) => {
		// TODO: implment support for other types
		let fieldValidation = Yup.string()
		field.validations.forEach((validation) => {
			console.log(validation.type, typeof validation.value)

			switch (validation.type) {
				case 'required':
					fieldValidation = fieldValidation.required(validation.message)
					break
				case 'minLength':
					if (typeof validation.value == 'number')
						fieldValidation = fieldValidation.min(
							validation.value,
							validation.message
						)
					break
				case 'maxLength':
					if (typeof validation.value == 'number')
						fieldValidation = fieldValidation.max(
							validation.value,
							validation.message
						)
					break
				case 'email':
					fieldValidation = fieldValidation.email(validation.message)
					break
				case 'matches':
					if (typeof validation.value == 'string')
						fieldValidation = fieldValidation.matches(
							new RegExp(validation.value),
							validation.message
						)
					break
				default:
					break
			}
		})
		formSchema[field.name] = fieldValidation
	})

	return formSchema
}
