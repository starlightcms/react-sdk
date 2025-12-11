import { FieldProps } from '../types'
import React from 'react'

/**
 * DynamicForm renderer component that renders `string` type fields
 * as `<input type="text">` elements with a <label> beside it.
 *
 * See {@doclink components/DynamicForm/#customizing-components | the guide page on the DynamicForm component}
 * to learn how to customize field renderer components like this one.
 *
 * @param props See {@link FieldProps} to learn the type of data this component receives.
 * @group DynamicForm Fields
 */
const String = ({ formId, field }: FieldProps): JSX.Element => {
  const inputId = `sl-form-${formId}--${field.key}`

  return (
    <div className="sl-form--field sl-form--field-string">
      <label htmlFor={inputId} className="sl-form--label">
        {field.title}
      </label>
      <input
        id={inputId}
        className="sl-form--input"
        name={field.key}
        type="text"
        min={field.rules?.min}
        max={field.rules?.max}
        required={field.is_required}
      />
    </div>
  )
}

export default String
