import { Field, FormSchema } from '@starlightcms/js-sdk'
import { ComponentType } from 'react'

/**
 * Props accepted by the {@link DynamicForm} component.
 * @group DynamicForm
 */
export interface DynamicFormProps {
  /**
   * An object with the form fields and the fetch URL. It should be
   * requested in the client using the URL provided by Starlight to
   * request the form schema using the GET method. Required.
   */
  formSchema: FormSchema
  /**
   * The "submit form" button text. Defaults to "Submit".
   */
  submitText?: string
  /**
   * A function that will run when the submit request is successful.
   */
  onSuccess?: () => void
  /**
   * A function that will run when the submit request fails.
   */
  onError?: (response: Response) => void
}

export interface FieldsProps {
  string: ComponentType<FieldProps>
  text: ComponentType<FieldProps>
  boolean: ComponentType<FieldProps>
}

export interface FieldProps {
  formId: string
  field: Field
}
