import React from 'react';
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export const Nav = (props) => {
  // let nav = { main: '/index', about: '/about', price: '/buy/price', contacts: '/contacts' };
  return (
    <div className={style.nav}>
     <header className={style.header}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/posts">Статьи</NavLink>
        <NavLink to="/about">Мои работы</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
      </header>
    {/* <ul className={style.ulList}>
          {Object.keys(nav).map(item => {
              return <li><a href={nav[item]}>{item}</a></li>
            })}
        </ul> */}
    </div>
  );
};