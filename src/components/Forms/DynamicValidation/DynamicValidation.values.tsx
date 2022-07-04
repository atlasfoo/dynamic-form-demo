export interface DynamicValidationFormModel {
	firstName: string
	lastName: string
	email: string
	password: string
}

export const dynamicValidationFormInitialValues: DynamicValidationFormModel = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
}
