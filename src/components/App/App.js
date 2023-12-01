import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../Movies/SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';
import mainApi from '../../utils/MainApi.js'
import moviesApi from '../../utils/MoviesApi.js'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js'
import filter from '../../utils/filter.js'
import { loggedInContext } from '../../contexts/AuthContext.js';
import { currentUserContext } from '../../contexts/CurrentUserContext.js';
import { savedCardsContext } from '../../contexts/SavedCardsContext.js';
import { preloaderContext } from '../../contexts/PreloaderContext.js';
import { mainCardsContext } from '../../contexts/MainCardsContext.js';

function App() {
  const navigate = useNavigate();
  // STATES
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [apiError, setApiError] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '', _id: '' });
  const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);
  const [cardListText, setCardListText] = React.useState('');

  const [initCardsArray, setInitCardsArray] = React.useState([]);
  const [mainCardsArray, setMainCardsArray] = React.useState([]);

  const [storeCardsArray, setStoreCardsArray] = React.useState([]);
  const [savedCardsArray, setSavedCardsArray] = React.useState([]);
  // EFFECTS
  React.useEffect(() => {
    handleValidate();
    getInitCardsArray();
    getSavedCardsArray();
  }, [])
  React.useEffect(() => {
    handleCheckLikes();
    if (initCardsArray.length !== 0) { localStorage.setItem('findedCards', JSON.stringify(mainCardsArray)); }
    if (mainCardsArray.length === 0 && localStorage.getItem('searchText') !== '') {
      setCardListText('Ничего не найдено')
    } else { setCardListText('') }
  }, [mainCardsArray])
  // USER FUNCTIONS
  function handleRegister(password, email, name) {
    mainApi.register(password, email, name)
      .then(() => {
        mainApi.authorize(password, email)
          .then(() => {
            handleValidate();
            clearApiError();
          })
          .then(() => {
            navigate('/movies', { replace: true });
          })
      })
      .catch((err) => setApiError(`${err}`));
  }
  function handleLogin(password, email) {
    mainApi.authorize(password, email)
      .then(() => {
        handleValidate();
        clearApiError();
      })
      .then(() => {
        navigate('/movies', { replace: true });
      })
      .catch((err) => setApiError(`${err}`));
  }
  function handleUpdateUser(name, email) {
    mainApi.editUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data.data);
        clearApiError();
        alert('Успешно изменено!')
      })
      .catch((err) => setApiError(`${err}`));
  }
  function handleValidate() {
    mainApi.getUserInfo()
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser({ name: data.name, email: data.email, _id: data._id });
        getSavedCardsArray();
      })
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch((err) => alert(`${err} - не удалось авторизоваться, выполните вход!`));
  }
  function logOut() {
    mainApi.signOut()
      .then(() => {
        localStorage.clear();
        setStoreCardsArray([]);
        setIsLoggedIn(false);
      })
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch((err) => alert(`${err} - не удалось Выйти из аккаунта`));

  }
  // CARD FUNCTIONS
  function getInitCardsArray() {
    moviesApi.getCards()
      .then((data) => {
        setIsPreloaderActive(true)
        setInitCardsArray(data)
      })
      .then(() => {
        const localSavedArr = JSON.parse(localStorage.getItem('findedCards'))
        if (localSavedArr !== null) {
          setMainCardsArray(localSavedArr)
        }
      })
      .then(() => setTimeout(() => {
        setIsPreloaderActive(false)
      }, 1000))

      .catch((err) => alert(`${err} - не удалось загрузить карточки`), setIsPreloaderActive(false));
  }
  function getSavedCardsArray() {
    mainApi.getSavedCards()
      .then((data) => {
        setIsPreloaderActive(true)
        setStoreCardsArray(data);
      })
      .then(() => setTimeout(() => {
        setIsPreloaderActive(false)
      }, 1000))
      .catch((err) => alert(`${err} - не удалось загрузить карточки`), setIsPreloaderActive(false));
  }
  function handleShowSavedCards(setCardsArray) {
    setCardsArray(storeCardsArray)
  }
  function handleCardsFilter(isActive, locale) {

    if (locale === 'basic') {
      setMainCardsArray(filter(initCardsArray, isActive, locale));
    }
    else if (locale === 'saved') { setSavedCardsArray(filter(storeCardsArray, isActive, locale)) }

  }
  function handleCardLike(setIsLiked, country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId) {
    mainApi.createCard(country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId)
      .then((newCard) => {
        const newCardObject = {
          "_id": newCard.data._id,
          "id": newCard.data.movieId,
          "nameRU": newCard.data.nameRU,
          "nameEN": newCard.data.nameEN,
          "director": newCard.data.director,
          "country": newCard.data.country,
          "year": newCard.data.year,
          "duration": newCard.data.duration,
          "description": newCard.data.description,
          "trailerLink": newCard.data.trailerLink,
          "image": {
            "url": newCard.data.image.substring(28),
            "formats": {
              "thumbnail": {
                "url": newCard.data.thumbnail
              }
            }
          }
        }
        setMainCardsArray(mainCardsArray.map((c) => c.id === movieId ? newCardObject : c));
        getSavedCardsArray();
        setIsLiked(true)
      })
      .catch((err) => alert(`${err} - не удалось сохранить карточку`));
  }
  function handleCardDelete(setIsLiked, cardId) {
    mainApi.deleteCard(cardId)
      .then((card) => {
        const newArray = savedCardsArray.filter(item => item._id !== card._id);
        setStoreCardsArray(newArray);
        setSavedCardsArray(newArray);
        setIsLiked(false)
      })
      .catch((err) => alert(`${err} - не удалось удалить карточку`));
  }
  function handleCheckLikes() {
    mainCardsArray.map((element) => {
      let _id

      if (storeCardsArray.some((el) => el.movieId === element.id ? _id = el._id : false)) {
        element._id = _id
        return element
      } else {
        return element
      }

    });
  }
  // OTHER FUNCTIONS
  function clearApiError() {
    setApiError('');
  }

  return (
    <div className="App">
      <loggedInContext.Provider value={isLoggedIn}>
        <currentUserContext.Provider value={currentUser}>
          <preloaderContext.Provider value={isPreloaderActive}>
            <savedCardsContext.Provider value={savedCardsArray}>
              <mainCardsContext.Provider value={mainCardsArray}>

                <Routes>
                  <Route path="/signin" element={<Login onSubmit={handleLogin} header='Рады видеть!' name='login' submitButtonText='Войти' apiError={apiError} clearApiError={clearApiError}/>} />
                  <Route path="/signup" element={<Register onSubmit={handleRegister} header='Добро пожаловать!' name='register' submitButtonText='Зарегистрироваться' apiError={apiError} clearApiError={clearApiError}/>} />
                  <Route path="/" element={<Main ><Header /></Main>} />

                  <Route path="/movies" element={<ProtectedRoute element={<Movies />} onCardDelete={handleCardDelete} onCardLike={handleCardLike} onFormSubmit={handleCardsFilter} cardListText={cardListText}><Header /></ProtectedRoute>} />
                  <Route path="/saved-movies" element={<ProtectedRoute element={<SavedMovies />} onMount={handleShowSavedCards} onCardDelete={handleCardDelete} onFormSubmit={handleCardsFilter} cardListText={cardListText}><Header /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute element={<Profile />} onLogOut={logOut} onChangeUser={handleUpdateUser} apiError={apiError} clearApiError={clearApiError}><Header /></ProtectedRoute>} />

                  <Route path="*" element={<NotFound />} />
                </Routes>

              </mainCardsContext.Provider>
            </savedCardsContext.Provider>
          </preloaderContext.Provider >
        </currentUserContext.Provider>
      </loggedInContext.Provider>
    </div>
  );
}

export default App;
