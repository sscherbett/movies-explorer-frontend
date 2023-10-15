import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [authCheck, setAuthCheck] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [searchedMovies, setSearchedMovies] = React.useState(
    JSON.parse(localStorage.getItem('searchedMovies')) || []
  );
  const [savedMovies, setSavedMovies] = React.useState(JSON.parse(localStorage.getItem('savedMovies')) || []);

  async function checkToken() {
    try {
      const jwt = localStorage.getItem('jwt');
      const data = await MainApi.getCurrentUser(jwt);
      if (data) {
        setCurrentUser(data);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (err) {
      console.error(err);
      setIsLoggedIn(false);
      setAuthCheck(true);
    } finally {
      setAuthCheck(true);
    }
  }

  React.useEffect(() => {
    checkToken();
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        const savedCards = await MainApi.getSavedMovies();
        setSavedMovies(savedCards);
      })();
    }
  }, [isLoggedIn]);

  return (
    <div className="page__container">
      {authCheck ? (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  searchedMovies={searchedMovies}
                  setSearchedMovies={setSearchedMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setCurrentUser={setCurrentUser}
                  setSearchedMovies={setSearchedMovies}
                />
              }
            />
            <Route
              path="/signin"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/signup"
              element={<Register setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default App;
