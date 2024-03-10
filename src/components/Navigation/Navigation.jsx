import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSlice';

export const Navigation = () => {
  const setAtive = ({ isActive }) => (isActive ? css.active : css.linkItem);
  const user = useSelector(selectUser);
  const listClass = user.currentUser ? css.listLoggedIn : css.list;

  return (
    <>
      <ul className={listClass}>
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
        {user.currentUser && (
          <li>
            <NavLink to="/favorites" className={setAtive}>
              Favorites
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};
