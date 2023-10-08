import React from 'react';
import './Login.css';
import Logo from '../Logo/Logo';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';
import AuthForm from '../AuthorizationForm/AuthForm';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/', { replace: true });
  }

  return (
    <main>
      <section className='login'>
        <div className='login__logo'>
          <Logo />
        </div>
        <AuthForm
          title='Рады видеть!'
          buttonTitle='Войти'
          question='Еще не зарегистрированы?'
          link='/signup'
          linkText='Регистрация'
          onSubmit={handleSubmit}
          isValid={errorMessage ? false : true}
        >
          <FormInput type='email' name='email' labelTitle='E-mail' placeholder='test@test.ru'/>
          <InputError errorMessage={errorMessage} />
          <FormInput type='password' name='password' labelTitle='Пароль' placeholder='пароль' minLength={8} />
          <InputError errorMessage={errorMessage} />
        </AuthForm>
      </section>
    </main>
  );
}

export default Login;
