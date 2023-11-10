import './Menu.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  function handleAccountClick() {
    props.handleAccountClick();
    handleCloseMenu();
  }
  function handleCloseMenu() {
    props.setIsActive(false);
  }
  return (
    <nav className={props.isActive ? 'menu menu_active' : 'menu'}>
      <div className='menu__container'>
        <button type='button' className='menu__close-button' onClick={handleCloseMenu} />
        <div className='menu__links'>
          <NavLink to={'/'} onClick={handleCloseMenu} className={({ isActive }) => `${isActive ? "menu__link menu__link_active" : "menu__link"}`}>Главная</NavLink>
          <NavLink to={'/movies'} className={({ isActive }) => `${isActive ? "menu__link menu__link_active" : "menu__link"}`} >Фильмы</NavLink>
          <NavLink to={'/saved-movies'} className={({ isActive }) => `${isActive ? "menu__link menu__link_active" : "menu__link"}`} >Сохранённые фильмы</NavLink>
          <button className='menu__account-button' onClick={handleAccountClick}>Аккаунт</button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
