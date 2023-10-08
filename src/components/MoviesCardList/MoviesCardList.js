import React from 'react';
import './MoviesCardList.css';
import { movies } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section>
      <ul className='movies'>
        {movies.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
