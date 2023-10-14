import React from 'react';
import './Login.css';
import Logo from '../Logo/Logo';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';
import AuthForm from '../AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';

import { useFormAndValidation } from '../../hooks/UseFormAndValidation';
import * as MainApi from '../../utils/MainApi';

function Login({ setIsLoggedIn }) {
  const { values, errors, setErrors, handleChange, isValid, resetForm } =
    useFormAndValidation();
  const [serverError, setServerError] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await MainApi.login(values.email, values.password);
      localStorage.setItem('jwt', data.token);
      if (data) {
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      }
    } catch (err) {
      const error = await err;

      if (error.status === 401) {
        setErrors({
          email: error.message,
          password: error.message,
        });
        return;
      }

      setServerError(error.message);
    }
  }

  return (
    <main>
      <section className="login">
        <div className="login__logo">
          <Logo />
        </div>
        <AuthForm
          title="Рады видеть!"
          buttonTitle="Войти"
          question="Еще не зарегистрированы?"
          link="/signup"
          linkText="Регистрация"
          onSubmit={handleSubmit}
          isDisabled={!isValid}
          serverError={serverError}
        >
          <FormInput
            type="email"
            name="email"
            labelTitle="E-mail"
            placeholder="test@test.ru"
            value={values.email || ''}
            onChange={handleChange}
            pattern="^[a-zA-Z0-9._]+@[a-zA-Z0-9_]+\.[a-z]{2,4}$"
          />
          <InputError errorMessage={errors.email || ''} />
          <FormInput
            type="password"
            name="password"
            labelTitle="Пароль"
            placeholder="пароль"
            minLength={8}
            value={values.password || ''}
            onChange={handleChange}
          />
          <InputError errorMessage={errors.password || ''} />
        </AuthForm>
      </section>
    </main>
  );
}

export default Login;
