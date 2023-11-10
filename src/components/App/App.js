import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../Movies/SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/signin" element={<Login header='Рады видеть!' name='login' submitButtonText='Войти'/>} />
        <Route path="/signup" element={<Register header='Добро пожаловать!' name='register' submitButtonText='Зарегистрироваться'/>} />

        <Route path="/" element={<Main ><Header /></Main>} />
        <Route path="/movies" element={<Movies><Header /></Movies>} />
        <Route path="/saved-movies" element={<SavedMovies><Header /></SavedMovies>} />
        <Route path="/profile" element={<Profile userName='Пользователь' userEmail='Пользователь@почта.рф'><Header /></Profile>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
