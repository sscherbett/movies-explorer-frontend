import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../../Preloader/Preloader';

function Movies({ isLoggedIn }) {
  const [isFound, setIsFound] = React.useState(true);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies-search">
        <SearchForm />
        {/* <Preloader/> */}
        {!isFound ? (
          <div className="movies-search__not-found">
            <p className="movies-search__not-found-text">Ничего не найдено.</p>
          </div>
        ) : (
          <>
            <MoviesCardList />
            <div className="movies-search__more-button_wrapper">
              <button type="button" className="movies-search__more-button">
                Ещё
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
