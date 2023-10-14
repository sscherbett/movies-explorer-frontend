import React from 'react';
import './FormInput.css';

function FormInput({
  type,
  name,
  labelTitle,
  placeholder,
  value,
  onChange,
  minLength,
  maxLength,
  pattern,
}) {
  return (
    <>
      <label className="form__label">{labelTitle}</label>
      <input
        className="form__input"
        type={type}
        name={name}
        placeholder={placeholder}
        required={true}
        value={value}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
    </>
  );
}

export default FormInput;
