import React from 'react';
import './Promo.css';
import logoP from '../../images/pic__COLOR_landing-logo.png';

function Promo() {
  return (
    <section className="promo">
      <img className="promo__logo" alt='логотип' src={logoP} />
      <h1 className="promo__title">
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
    </section>
  );
}

export default Promo;
