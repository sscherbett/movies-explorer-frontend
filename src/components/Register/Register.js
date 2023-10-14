import React from 'react';
import './Register.css';
import Logo from '../Logo/Logo';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';
import AuthForm from '../AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/UseFormAndValidation';

import * as MainApi from '../../utils/MainApi';

function Register({ setIsLoggedIn }) {
  const { values, errors, handleChange, isValid, resetForm } =
  useFormAndValidation();
  const [serverError, setServerError] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await MainApi.register(
        values.name,
        values.email,
        values.password
      );
      if (data?.email) {
        const data = await MainApi.login(values.email, values.password);
        localStorage.setItem('jwt', data.token);
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      }
    } catch (err) {
      const error = await err;
      setServerError(error.message);
      console.error(error);
    }
  }

  return (
    <main>
      <section className="register">
        <div className="register__logo">
          <Logo />
        </div>
        <AuthForm
          title="Добро пожаловать!"
          buttonTitle="Зарегистрироваться"
          question="Уже зарегистрированы?"
          link="/signin"
          linkText="Войти"
          onSubmit={handleSubmit}
          isDisabled={!isValid}
          serverError={serverError}
        >
          <FormInput
            type="text"
            name="name"
            labelTitle="Имя"
            placeholder="Иван"
            minLength={2}
            maxLength={30}
            value={values.name || ''}
            onChange={handleChange}
            pattern='^[a-zA-ZA-ЯЁа-яё\s\-]+$'
          />
          <InputError errorMessage={errors.name || ''} />
          <FormInput
            type="email"
            name="email"
            labelTitle="E-mail"
            placeholder="test@test.ru"
            value={values.email || ''}
            onChange={handleChange}
            pattern='^[a-zA-Z0-9._]+@[a-zA-Z0-9_]+\.[a-z]{2,4}$'
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

export default Register;
