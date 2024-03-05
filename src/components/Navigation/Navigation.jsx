import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={css.linkItem}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/psychologists" className={css.linkItem}>
            Psychologists
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={css.linkItem}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </>
  );
};
