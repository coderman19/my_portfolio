import React from 'react';
import style from './Nav.module.css';

export const Nav = (props) => {
  let nav = { main: '/index', about: '/about', price: '/buy/price', contacts: '/contacts' };
  return (
    <div className={style.nav}>
    <ul className={style.ulList}>
          {Object.keys(nav).map(item => {
              return <li><a href={nav[item]}>{item}</a></li>
            })}
        </ul>
    </div>
  );
};