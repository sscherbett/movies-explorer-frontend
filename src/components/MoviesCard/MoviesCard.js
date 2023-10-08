import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { findAllByTestId } from '@testing-library/react';

function MoviesCard({ movie }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const [isShownHoverContent, setIsShownHoverContent] = React.useState(false);

  const movieSaveButtonClassName = `${isSaved ? 'movies__save-button_type_saved' : 'movies__save-button'}`;

  const movieDeleteButtonClassName = 'movies__save-button_type_delete';

  return (
    <li className="movies__item">
      {isShownHoverContent && (
        <button
          type="button"
          className={
            location.pathname === '/movies'
              ? movieSaveButtonClassName
              : movieDeleteButtonClassName
          }
          onClick={() => setIsSaved((prevValue) => !prevValue)}
          onMouseEnter={() => setIsShownHoverContent(true)}
        />
      )}
      <img
        src={movie.link}
        alt={movie.name}
        className="movies__image"
        onMouseEnter={() => !isSaved && setIsShownHoverContent(true)}
        onMouseLeave={() => !isSaved && setIsShownHoverContent(false)}
      />
      <div className="movies__wrapper">
        <h2 className="movies__title">{movie.name}</h2>
        <span className="movies__duration">{movie.duration}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
