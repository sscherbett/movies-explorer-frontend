import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <div className='page__container'>
      <Routes>
        <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path='/movies' element={<Movies isLoggedIn={isLoggedIn} />} />
        <Route
          path='/saved-movies'
          element={<SavedMovies isLoggedIn={isLoggedIn} />}
        />
        <Route path='/profile' element={<Profile isLoggedIn={isLoggedIn}/>} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
