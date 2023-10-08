import React from 'react';
import './Header.css';
import profile from '../../images/profile.svg';
import profileThemeGrey from '../../images/profile-grey.png';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header({ isLoggedIn }) {
  const location = useLocation();

  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  function handleOpenMenu() {
    setIsOpenMenu(true);
  }

  function handleCloseMenu() {
    setIsOpenMenu(false);
  }

  return (
    <header className={`header page__header ${location.pathname === '/' ? 'header_type_main' : ''}`}>
      <Logo />
      <nav className='header__menu'>
        {!isLoggedIn && (
          <div className='header__menu-container'>
            <Link to='/signup' className='header__menu-link'>
              Регистрация
            </Link>
            <Link to='/signin' className='header__menu-link'>
              <button type='button' className='header__menu-link header__login-button'>
                Войти
              </button>
            </Link>
          </div>
        )}
        {isLoggedIn && (
          <>
            <div className='header__menu-wrapper'>
              <ul className='header__menu-container header__menu-container_type_authorized'>
                <li>
                  <NavLink
                    to='/movies'
                    className={({ isActive }) =>
                      `header__menu-link header__menu-link_type_authorized ${
                        isActive ? 'header__menu-link_active' : ''
                      }`
                    }
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/saved-movies'
                    className={({ isActive }) =>
                      `header__menu-link header__menu-link_type_authorized ${
                        isActive ? 'header__menu-link_active' : ''
                      }`
                    }
                  >
                    Сохранённые фильмы
                  </NavLink>
                </li>
              </ul>
              <Link
                to='/profile'
                className='header__menu-link header__menu-link_type_authorized'
              >
                <img
                  className='header__profile-icon'
                  alt='иконка профиля'
                  src={location.pathname === '/' ? profile : profileThemeGrey}
                />
              </Link>
            </div>
            <button type='button' className='header__menu-burger' onClick={handleOpenMenu}>
              <span className='header__menu-burger-item' />
            </button>
          </>
        )}
      </nav>
      <Navigation onClose={handleCloseMenu} isOpenMenu={isOpenMenu} />
    </header>
  );
}

export default Header;
