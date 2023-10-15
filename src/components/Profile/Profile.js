import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import Header from '../Header/Header';
import InputError from '../InputError/InputError';
import FormButton from '../FormButton/FormButton';
import * as MainApi from '../../utils/MainApi';

function Profile({ isLoggedIn, setIsLoggedIn, setCurrentUser, setSearchedMovies }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [serverError, setServerError] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errorName, setErrorName] = React.useState('');
  const [errorEmail, setErrorEmail] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const [isInputActive, setIsInputActive] = React.useState(false);
  const [isChangesConfirmed, setIsChangedConfirmed] = React.useState(false);
  const [isEdited, setIsEdited] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleInputChange() {
    setIsInputActive(true);
    setIsEdited(true);
  }

  function handleFormChange(e) {
    setIsValid(e.target.closest('form').checkValidity());
  }

 function handleSignOut() {
    try {
      setIsLoggedIn(false);
      setCurrentUser({});
      setSearchedMovies([]);
      localStorage.clear();
      navigate('/', { replace: true });
    } catch (err) {
      setServerError(err.message);
      console.error(err);
    }

  }

  async function handleProfileChange(e) {
    try {
      e.preventDefault();
      const data = await MainApi.editProfileInfo(name, email);
      if (data) {
        setCurrentUser(data);
        setIsChangedConfirmed(true);
        setIsEdited(false);
        setIsInputActive(false);
        setIsValid(false);
      }
    } catch (err) {
      const error = await err;
      setServerError(error.message);
      console.error(error);
    }
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form
            className="profile__form"
            name="profile-form"
            noValidate
            onChange={(e) => handleFormChange(e)}
            onSubmit={handleProfileChange}
          >
            <fieldset className="profile__input-container">
              <div className="profile__field-wrapper">
                <label className="profile__form-label">Имя</label>
                <input
                  type="text"
                  className="profile__form-input"
                  placeholder="Виталий"
                  minLength={2}
                  maxLength={30}
                  required
                  value={name || ''}
                  disabled={!isInputActive}
                  pattern="^[a-zA-ZA-ЯЁа-яё\s\-]+$"
                  onChange={(e) => {
                    setIsChangedConfirmed(false);
                    setName(e.target.value);
                    setErrorName(e.target.validationMessage);
                  }}
                />
              </div>
              <span
                className={`profile__error ${
                  errorName && 'profile__error_visible'
                }`}
              >
                {errorName}
              </span>
              <div className="profile__field-wrapper">
                <label className="profile__form-label">E-mail</label>
                <input
                  type="email"
                  className="profile__form-input"
                  placeholder="example@yandex.ru"
                  required
                  pattern="^[a-zA-Z0-9._]+@[a-zA-Z0-9_]+\.[a-z]{2,4}$"
                  value={email || ''}
                  disabled={!isInputActive}
                  onChange={(e) => {
                    setIsChangedConfirmed(false);
                    setEmail(e.target.value);
                    setErrorEmail(e.target.validationMessage);
                  }}
                />
              </div>
              <span
                className={`profile__error ${
                  errorEmail && 'profile__error_visible'
                }`}
              >
                {errorEmail}
              </span>
            </fieldset>
            {isEdited ? (
              <>
                {serverError && <InputError errorMessage={serverError} />}
                <FormButton
                  buttonTitle="Сохранить"
                  isDisabled={!isValid}
                  isCurrentUserChanged={
                    currentUser.name === name && currentUser.email === email
                  }
                />
              </>
            ) : (
              <>
                {isChangesConfirmed && (
                  <p className="profile__confirm-message">Данные обновлены</p>
                )}
                <button
                  className="profile__button"
                  onClick={handleInputChange}
                  type="button"
                >
                  Редактировать
                </button>
                <Link to="/" className="profile__link">
                  <button
                    type="button"
                    className="profile__button profile__button_type_exit"
                    onClick={handleSignOut}
                  >
                    Выйти из аккаунта
                  </button>
                </Link>
              </>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;

