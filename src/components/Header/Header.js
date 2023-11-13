import './Header.css';
import logo from '../../images/logo.svg';
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Menu from './Menu/Menu.js';

function Header(props) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState();
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 770;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    if (width > breakpoint) { setIsActive(false)};
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [width]);

  function handleAccountClick() {
    navigate('/profile');
  }
  function handleRegisterClick() {
    navigate('/signup');
  }
  function handleLoginClick() {
    navigate('/signin');
  }
  function handleOpenMenu() {
    setIsActive(true);
  }
  const tempIsLoggedIn = true;



  if (width > breakpoint) {
    return (
      <header className="header">
        <Link to="/"><img className='header__logo' alt='mesto' src={logo} /></Link>
        {
          tempIsLoggedIn ?
            <>
              <nav className='header__menu'>
                <NavLink to="/movies" className={({ isActive }) => `${isActive ? "header__menu-link header__menu-link_active" : "header__menu-link"}`}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={({ isActive }) => `${isActive ? "header__menu-link header__menu-link_active" : "header__menu-link"}`}>Сохранённые фильмы</NavLink>
              </nav>
              <nav className='header__button-set'>
                <button className='header__account-button' onClick={handleAccountClick}>Аккаунт</button>
              </nav>
            </>
            :
            <nav className='header__button-set'>
              <button className='header__register-button' onClick={handleRegisterClick}>Регистрация</button>
              <button className='header__signin-button' onClick={handleLoginClick}>Войти</button>
            </nav>
        }
      </header>
    );
  };
  return (
    <header className="header">
      <Link to="/"><img className='header__logo' alt='mesto' src={logo} /></Link>
      {
        tempIsLoggedIn ?
          <>
            <button type='button' className='header__menu-button' onClick={handleOpenMenu} />
            <Menu
              handleAccountClick={handleAccountClick}
              isActive={isActive}
              setIsActive={setIsActive} />
          </>
          :
          <nav className='header__button-set'>
            <button className='header__register-button' onClick={handleRegisterClick}>Регистрация</button>
            <button className='header__signin-button' onClick={handleLoginClick}>Войти</button>
          </nav>
      }
    </header>
  );

}
export default Header;