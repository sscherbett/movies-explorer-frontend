import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import * as MoviesApi from '../../utils/MoviesApi';
import useWindowWidth from '../../hooks/UseWindowWidth';
import { WINDOW_SIZE_LARGE, WINDOW_SIZE_SMALL } from '../../utils/constants';

function Movies({
  isLoggedIn,
  savedMovies,
  setSavedMovies,
  searchedMovies,
  setSearchedMovies,
}) {
  const [isFound, setIsFound] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState('');
  const [searchInput, setSearchInput] = React.useState(
    localStorage.getItem('inputValue') || ''
  );
  const [isChecked, setIsChecked] = React.useState(
    JSON.parse(localStorage.getItem('checkboxState')) || false
  );

  const windowWidth = useWindowWidth();

  const [initialCards, setInitialCards] = React.useState(0);
  const [additionalCards, setAdditionalCards] = React.useState(0);

  const buttonActive = searchedMovies.length > initialCards;

  React.useEffect(() => {
    countCards();
  }, [searchedMovies, windowWidth]);

  function countCards() {
    if (windowWidth > WINDOW_SIZE_LARGE) {
      setInitialCards(12);
      setAdditionalCards(3);
      return;
    }
    if (windowWidth <= WINDOW_SIZE_LARGE && windowWidth > WINDOW_SIZE_SMALL) {
      setInitialCards(8);
      setAdditionalCards(2);
      return;
    }
    if (windowWidth <= WINDOW_SIZE_SMALL) {
      setInitialCards(5);
      setAdditionalCards(2);
      return;
    }
  }

  function addMoreCards() {
    setInitialCards(initialCards + additionalCards);
  }

  async function handleSearchMovies(e) {
    e.preventDefault();
    try {
      if (searchInput) {
        setIsLoading(true);
        if (localStorage.getItem('allMovies') === null) {
          const res = await MoviesApi.getMovies();
          localStorage.setItem('allMovies', JSON.stringify(res));
        }
        const res = JSON.parse(localStorage.getItem('allMovies'));
        const searchedMovies = res.filter((movie) => {
          if (isChecked) {
            return (
              (movie.duration < 40 || movie.duration === 40) &&
              (movie.nameRU.toLowerCase().includes(searchInput.toLowerCase()) ||
                movie.nameEN
                  .toLowerCase()
                  .includes(searchInput.toLocaleLowerCase()))
            );
          } else {
            return (
              movie.nameRU.toLowerCase().includes(searchInput.toLowerCase()) ||
              movie.nameEN
                .toLowerCase()
                .includes(searchInput.toLocaleLowerCase())
            );
          }
        });

        localStorage.setItem('searchedMovies', JSON.stringify(searchedMovies));
        localStorage.setItem('inputValue', searchInput);
        localStorage.setItem('checkboxState', JSON.stringify(isChecked));

        if (searchedMovies.length > 0) {
          setIsFound(true);
          setSearchedMovies(searchedMovies);
        } else {
          setIsFound(false);
        }
      } else {
        setIsFound(false);
        setResult('Нужно ввести ключевое слово.');
      }
    } catch (err) {
      console.error(err);
      setIsFound(false);
      setResult(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
      localStorage.clear();
    } finally {
      setIsLoading(false);
    }
  }

  function filterCheckbox() {
    try {
      setIsChecked(!isChecked);
      const res = JSON.parse(localStorage.getItem('allMovies'));
      const searchedMovies = res.filter((movie) => {
        if (!isChecked) {
          return (
            (movie.duration < 40 || movie.duration === 40) &&
            (movie.nameRU.toLowerCase().includes(searchInput.toLowerCase()) ||
              movie.nameEN
                .toLowerCase()
                .includes(searchInput.toLocaleLowerCase()))
          );
        } else {
          return (
            movie.nameRU.toLowerCase().includes(searchInput.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchInput.toLocaleLowerCase())
          );
        }
      });
      localStorage.setItem('checkboxState', JSON.stringify(!isChecked));
      localStorage.setItem('searchedMovies', JSON.stringify(searchedMovies));
      localStorage.setItem('inputValue', searchInput);

      if (searchedMovies.length > 0) {
        setIsFound(true);
        setSearchedMovies(searchedMovies);
      } else {
        setIsFound(false);
      }
    } catch (err) {
      console.error(err);
      setIsFound(false);
      setResult(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
    }
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies-search">
        <SearchForm
          isChecked={isChecked}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchMovies={handleSearchMovies}
          filterMovies={filterCheckbox}
        />
        {isLoading && <Preloader />}
        {!isFound ? (
          <div className="movies-search__not-found">
            <p className="movies-search__not-found-text">
              {result ? result : 'Ничего не найдено.'}
            </p>
          </div>
        ) : (
          <>
            <MoviesCardList
              moviesList={searchedMovies}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              initialCards={initialCards}
              setIsFound={setIsFound}
              setResult={setResult}
            />
            {searchedMovies.length > 0 && buttonActive && (
              <div className="movies-search__more-button_wrapper">
                <button
                  type="button"
                  className="movies-search__more-button"
                  onClick={addMoreCards}
                >
                  Ещё
                </button>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
