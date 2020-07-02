import React from 'react';
import { NavLink } from 'react-router-dom';

import menuList from './data.js';

import s from './Navigation.module.css';

const Navigation = () => (
  <ul className={s.list}>
    {menuList.map((itemList, idx) => (
      <li key={idx}>
        <NavLink exact to={itemList.path}>
          {itemList.to}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
