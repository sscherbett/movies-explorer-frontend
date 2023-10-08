import React from 'react';
import './AboutMe.css';
import Title from '../Title/Title';
import photo from '../../images/photo.jpeg';

function AboutMe() {
  return (
    <section className='student' id='about-me'>
      <Title>Cтудент</Title>
      <div className='student__container'>
        <div className='student__info'>
          <h3 className='student__name'>Евгений</h3>
          <p className='student__profession'>
            Фронтенд&#8209;разработчик, 33 года
          </p>
          <p className='student__bio'>
            Я родился и живу в Москве, закончила факультет менеджмента МГиУ. Я люблю
            слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2017
            года работал в компании Brandshop. После того, как
            прошел курс по веб&#8209;разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href='https://github.com/sscherbett'
            target='_blank'
            rel='noreferrer noopener'
            className='student__github'
          >
            Github
          </a>
        </div>
        <img className='student__photo' src={photo} alt='фото студента' />
      </div>
    </section>
  );
}

export default AboutMe;
