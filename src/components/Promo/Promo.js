// import React from 'react';
// import './Promo.css';

// function Promo() {
//     return (
//       <section className='promo'>
//         <div className='promo__content'>
//             <div>
//               <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
//             </div>
//             <img className='promo__image' alt='лого практикума' src={praktikum} />
//         </div>
//         <div className='promo__nav'>
//             <a href='#about-project'>
//               <button className='promo__button'>О проекте</button>
//             </a>
//             <a href='#techs'>
//               <button className='promo__button'>Технологии</button>
//             </a>
//             <a href='#about-me'>
//               <button className='promo__button'>Студент</button>
//             </a>
//         </div>
//       </section>
//     )
// }
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
