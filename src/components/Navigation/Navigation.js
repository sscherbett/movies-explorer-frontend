import React from 'react';
import './Navigation.css';
import profileThemeGrey from '../../images/profile-grey.png';

import { NavLink, Link } from 'react-router-dom';

function Navigation({ onClose, isOpenMenu }) {
  return (
    <section className={`sidebar ${isOpenMenu ? 'sidebar_opened' : ''}`}>
      <div className='sidebar__container'>
        <button type='button' className='sidebar__close-button' onClick={onClose} />
        <nav className='sidebar__menu'>
          <ul className='sidebar__menu-container'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `sidebar__menu-link ${
                    isActive ? 'sidebar__menu-link_active' : ''
                  }`
                }
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/movies'
                className={({ isActive }) =>
                  `sidebar__menu-link ${
                    isActive ? 'sidebar__menu-link_active' : ''
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
                  `sidebar__menu-link ${
                    isActive ? 'sidebar__menu-link_active' : ''
                  }`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <Link to='/profile'>
            <img
              className='sidebar__profile-icon'
              alt='иконка профиля'
              src={profileThemeGrey}
            />
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default Navigation;
