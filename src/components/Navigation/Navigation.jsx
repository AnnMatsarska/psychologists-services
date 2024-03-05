import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/psychologists">Psychologists</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/register">Registration</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
