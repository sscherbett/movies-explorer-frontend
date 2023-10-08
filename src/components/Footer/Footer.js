import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__description'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <span className='footer__copyright'>&copy; 2023</span>
        <ul className='footer__links'>
          <li className='footer__link'>
            <a
              className='footer__link-text'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link'>
            <a
              className='footer__link-text'
              href='https://github.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
