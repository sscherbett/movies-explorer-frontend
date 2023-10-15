import React from 'react';
import './AuthForm.css';
import FormButton from '../FormButton/FormButton';
import { Link, useLocation } from 'react-router-dom';

function AuthForm({
  children,
  buttonTitle,
  title,
  question,
  link,
  linkText,
  onSubmit,
  isDisabled,
  serverError,
}) {
  const location = useLocation();

  return (
    <div className="auth">
      <h1 className="auth__title">{title}</h1>
      <form
        className="form"
        name="register-form"
        onSubmit={onSubmit}
        noValidate
      >
        {children}
        <div
          className={`form__button-wrapper
            ${
              location.pathname === '/signup' &&
              'form__button-wrapper_type_signup'
            }
            ${
              location.pathname === '/signin' &&
              'form__button-wrapper_type_signin'
            }
          `}
        >
          <p className='form__server-error'>{serverError}</p>
          <FormButton buttonTitle={buttonTitle} isDisabled={isDisabled} />
        </div>
        <div className="form__link-wrapper">
          <p className="form__question">{question}</p>
          <Link to={link} className="form__link">
            {linkText}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
