import React from 'react';
import './FormButton.css';
import { useLocation } from 'react-router-dom';

function FormButton({ buttonTitle, isDisabled, isCurrentUserChanged }) {
  const location = useLocation();

  return (
    <button
      type="submit"
      className={`form__submit-button
      ${isCurrentUserChanged && 'form__submit-button_disabled'}
      ${isDisabled && 'form__submit-button_disabled'}
      ${location.pathname === '/signup' && 'form__submit-button_type_signup'}
      ${location.pathname === '/signin' && 'form__submit-button_type_signin'}
      ${location.pathname === '/profile' && 'form__submit-button_type_profile'}
    `}
      disabled={isDisabled}
    >
      {buttonTitle}
    </button>
  );
}

export default FormButton;
