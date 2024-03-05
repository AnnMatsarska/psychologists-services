import { NavLink } from 'react-router-dom';
import css from './UserAuth.module.css';

export const UserAuth = () => {
  const setAtive = ({ isActive }) => (isActive ? css.active : css.linkItem);
  return (
    <ul className={css.list}>
      <li>
        <NavLink to="/login" className={setAtive}>
          Log In
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className={setAtive}>
          Registration
        </NavLink>
      </li>
    </ul>
  );
};
