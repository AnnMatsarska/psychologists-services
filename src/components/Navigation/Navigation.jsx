import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const setAtive = ({ isActive }) => (isActive ? css.active : css.linkItem);
  return (
    <>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={setAtive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/psychologists" className={setAtive}>
            Psychologists
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={setAtive}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </>
  );
};
