import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => (
  <ul className={s.list}>
    <li>
      <NavLink exact to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies">Movies</NavLink>
    </li>
  </ul>
);

export default Navigation;
