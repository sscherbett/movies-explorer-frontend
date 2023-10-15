import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as MainApi from '../../utils/MainApi';

function SavedMovies({ isLoggedIn, savedMovies, setSavedMovies }) {
  const [isFound, setIsFound] = React.useState(true);
  const [result, setResult] = React.useState('');
  const [searchInput, setSearchInput] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const savedCards = await MainApi.getSavedMovies();
      setSavedMovies(savedCards);
      setFoundMovies(savedCards);
      localStorage.setItem('savedMovies', JSON.stringify(savedCards));
    })();
  }, []);

  function handleSearchMovies(e) {
    e.preventDefault();
    try {
      if (searchInput) {
        const searchedMovies = savedMovies.filter((movie) => {
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
        if (searchedMovies.length > 0) {
          setIsFound(true);
          setFoundMovies(searchedMovies);
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
    }
  }

  function filterCheckbox() {
    try {
      setIsChecked(!isChecked);
      const searchedMovies = savedMovies.filter((movie) => {
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

      if (searchedMovies.length > 0) {
        setIsFound(true);
        setFoundMovies(searchedMovies);
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
      <main className="saved-movies">
        <SearchForm
          isChecked={isChecked}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchMovies={handleSearchMovies}
          filterMovies={filterCheckbox}
        />
        {!isFound ? (
          <div className='movies-search__not-found'>
            <p className='movies-search__not-found-text'>
              {result ? result : 'Ничего не найдено.'}
            </p>
          </div>
        ) : (
          <MoviesCardList
            moviesList={foundMovies}
            setFoundMovies={setFoundMovies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            setIsFound={setIsFound}
            setResult={setResult}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
