import React from "react"

import "./form-input.styles.scss"

interface FormInputProps {
  label: string
  name: string
  type: string
  value: string
  required?: boolean
  onChange?: (event: any) => void
  handleChange?: (event: any) => void
}

const FormInput = ({ handleChange, label, ...otherProps }: FormInputProps) => (
  <div className='group'>
    <input
      className='form-input'
      onChange={handleChange}
      {...otherProps}></input>
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
)

export default FormInput
