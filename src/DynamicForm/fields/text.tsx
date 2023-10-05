import { FieldProps } from '../types'
import React from 'react'

/**
 * DynamicForm renderer component that renders `text` type fields
 * as `<textarea>` elements with a <label> beside it.
 *
 * See {@doclink components/DynamicForm/#customizing-components | the guide page on the DynamicForm component}
 * to learn how to customize field renderer components like this one.
 *
 * @param props See {@link FieldProps} to learn the type of data this component receives.
 * @group DynamicForm Fields
 */
const Text = ({ formId, field }: FieldProps): JSX.Element => {
  const inputId = `sl-form-${formId}--${field.key}`

  return (
    <div className="sl-form--field sl-form--field-text">
      <label htmlFor={inputId} className="sl-form--label">
        {field.title}
      </label>
      <textarea
        id={inputId}
        className="sl-form--input"
        name={field.key}
        required={field.is_required}
      />
    </div>
  )
}

export default Text
