import React from 'react';
import './AboutProject.css';
import Title from '../Title/Title';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <Title>О проекте</Title>
      <div className='about-project__content'>
        <div className='about-project__description'>
          <h3 className='about-project__heading'>
          Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__description'>
          <h3 className='about-project__heading'>
          На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__deadlines'>
        <p className='about-project__weeks about-project__weeks_type_backend'>
          1 неделя
        </p>
        <p className='about-project__weeks about-project__weeks_type_frontend'>
          4 недели
        </p>
        <p className='about-project__label'>Back-end</p>
        <p className='about-project__label'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
