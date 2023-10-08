import React from 'react';
import './InputError.css';
import { useLocation } from 'react-router-dom';

function InputError({ errorMessage }) {
  const location = useLocation();

  return (
    <span
      className={`form__error ${errorMessage && 'form__error_visible'} ${
        location.pathname === '/profile' && 'form__error_type_profile'
      }`}
    >
      {errorMessage}
    </span>
  );
}

export default InputError;
