import { DynamicFormProps, FieldsProps } from './types'
import React, { FormEvent, useRef } from 'react'
import Boolean from './fields/boolean'
import String from './fields/string'
import Text from './fields/text'

const defaultComponents: FieldsProps = {
  string: String,
  text: Text,
  boolean: Boolean,
}

/**
 * Renders HTML content from data (fields) returned by a Form on Starlight.
 *
 * The only required prop is `formSchema` (which is an object with both the fetch
 * URL and the form object itself, containing its fields). Additionally, you can
 * provide a Submit button text (submitText) and functions to be run on submit
 * success (onSuccess) and submit failure (onError).
 *
 * To learn how to customize the rendered fields, take a look at the
 * [Customizing the output](#) guide page.
 *
 * @example Requesting a form and rendering its fields.
 *
 * Assume we created a "Signup" form with a slug of `signup`, and placed a simple
 * text field ("string") with a key of `email` on it.
 *
 * ```jsx
 * import Starlight, { DynamicForm } from '@starlightcms/react-sdk'
 *
 * const FormComponent = ({ slug }) => {
 *   const [schema, setSchema] = useState(null)
 *
 *   // This is just an example, you could fetch
 *   // the form any way you want.
 *   useEffect(async () => {
 *     const response = await Starlight.form(slug).schema()
 *
 *     setSchema(response.data)
 *   }, [ slug ])
 *
 *   // After fetching, field groups will be on the `schema.data.groups` property.
 *   return (
 *     schema ? (
 *        <DynamicForm formSchema={schema} />
 *     ) : (
 *       <div>Loading...</div>
 *     )
 *   )
 * }
 *
 * ```
 *
 * @param props Component props. See {@link DynamicFormProps} to see the
 * available options.
 * @group DynamicForm
 */

export const DynamicForm = ({
  formSchema,
  submitText = 'Submit',
  onSuccess,
  onError,
}: DynamicFormProps): JSX.Element => {
  const formRef = useRef<HTMLFormElement | null>(null)

  const signUp = async (event: FormEvent) => {
    event.preventDefault()

    if (formRef.current) {
      const data = new FormData(formRef.current)

      const response = await fetch(formSchema.action_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(data)),
      })

      if (response.status === 200) {
        if (typeof onSuccess === 'function') onSuccess()
      } else {
        if (typeof onError === 'function') onError(response)
      }
    }
  }

  const parts = formSchema.action_url.split('/')
  const slug = parts[parts.length - 1]

  if (!formSchema.groups.length) return null as unknown as JSX.Element

  return (
    <form id={`sl-form--${slug}`} ref={formRef} onSubmit={signUp}>
      {formSchema.groups.map((group) => (
        <div className="sl-form--group" key={group.title}>
          {group.fields.map((field) => {
            if (
              Object.prototype.hasOwnProperty.call(
                defaultComponents,
                field.type
              )
            ) {
              const Component =
                defaultComponents[field.type as keyof typeof defaultComponents]

              return <Component formId={slug} field={field} key={field.key} />
            }
          })}
        </div>
      ))}
      <button className="sl-form--submit" type="submit">
        {submitText}
      </button>
    </form>
  )
}
