import React from 'react';
import './AuthForm.css';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';

function AuthForm({
  children,
  buttonTitle,
  title,
  question,
  link,
  linkText,
  onSubmit,
  isValid
}) {
  return (
    <div className='auth'>
      <h1 className='auth__title'>{title}</h1>
      <form className='form' name='register-form' onSubmit={onSubmit}>
        {children}
        <FormButton buttonTitle={buttonTitle} isValid={isValid}/>
        <div className='form__link-wrapper'>
          <p className='form__question'>{question}</p>
          <Link to={link} className='form__link'>
            {linkText}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
