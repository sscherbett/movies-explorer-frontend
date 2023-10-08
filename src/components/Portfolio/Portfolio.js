import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://github.com/sscherbett/how-to-learn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h3 className="portfolio__link-title">Статичный сайт</h3>
          </a>
          <a
            className="portfolio__arrow-link"
            href="https://github.com/sscherbett/how-to-learn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="portfolio__arrow"
              src={arrow}
              alt="ссылка на страницу"
            />
          </a>
        </li>
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://github.com/sscherbett/russian-travel"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h3 className="portfolio__link-title">Адаптивный сайт</h3>
          </a>
          <a
            className="portfolio__arrow-link"
            href="https://github.com/sscherbett/russian-travel"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="portfolio__arrow"
              src={arrow}
              alt="ссылка на страницу"
            />
          </a>
        </li>
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://github.com/sscherbett/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h3 className="portfolio__link-title">Одностраничное приложение</h3>
          </a>
          <a
            className="portfolio__arrow-link"
            href="https://github.com/sscherbett/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="portfolio__arrow"
              src={arrow}
              alt="ссылка на страницу"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
