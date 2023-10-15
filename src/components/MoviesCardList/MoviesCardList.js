import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  moviesList,
  setFoundMovies,
  savedMovies,
  setSavedMovies,
  initialCards,
  setIsFound,
  setResult
}) {

  const location = useLocation();

  return (
    <section>
      <ul className='movies'>
      {location.pathname === '/movies'
          ? moviesList.slice(0, initialCards).map((movie) => (
              <MoviesCard
                key={location.pathname === '/movies' ? movie.id : movie._id}
                movie={movie}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                setIsFound={setIsFound}
                setResult={setResult}
              />
            ))
          : moviesList.map((movie) => (
              <MoviesCard
                key={movie._id}
                movie={movie}
                foundMovies={moviesList}
                setFoundMovies={setFoundMovies}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                setIsFound={setIsFound}
                setResult={setResult}
              />
            ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
