import React from 'react';
import './FormButton.css';
import { useLocation } from 'react-router-dom';

function FormButton({ buttonTitle, isValid }) {
  const location = useLocation();

  return (
    <button
      type='submit'
      className={`form__submit-button
      ${!isValid && 'form__submit-button_disabled'}
      ${location.pathname === '/signup' && 'form__submit-button_type_signup'}
      ${location.pathname === '/signin' && 'form__submit-button_type_signin'}
    `}
    >
      {buttonTitle}
    </button>
  );
}

export default FormButton;
