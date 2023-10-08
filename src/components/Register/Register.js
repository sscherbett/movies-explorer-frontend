import React from 'react';
import './Register.css';
import Logo from '../Logo/Logo';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';
import AuthForm from '../AuthorizationForm/AuthForm';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [errorMessage, setErrorMessage] = React.useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/signin', { replace: true });
  }

  return (
    <main>
      <section className='register'>
        <div className='register__logo'>
          <Logo />
        </div>
        <AuthForm
          title='Добро пожаловать!'
          buttonTitle='Зарегистрироваться'
          question='Уже зарегистрированы?'
          link='/signin'
          linkText='Войти'
          onSubmit={handleSubmit}
          isValid={errorMessage ? false : true}
        >
          <FormInput type='text' name='name' labelTitle='Имя' placeholder='Иван' minLength={2} maxLength={30}/>
          <InputError errorMessage={errorMessage} />
          <FormInput type='email' name='email' labelTitle='E-mail' placeholder='test@test.ru'/>
          <InputError errorMessage={errorMessage} />
          <FormInput type='password' name='password' labelTitle='Пароль' placeholder='пароль' minLength={8} />
          <InputError errorMessage={errorMessage} />
        </AuthForm>
      </section>
    </main>
  );
}

export default Register;
