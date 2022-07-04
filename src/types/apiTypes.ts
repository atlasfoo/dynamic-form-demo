export interface FormSchema {
	form_id: number
	form_name: string
	validation_fields: ValidationField[]
}

export interface ValidationField {
	type: string
	name: string
	validations: Validation[]
}

export interface Validation {
	type: string
	message: string
	value: number | string
}
