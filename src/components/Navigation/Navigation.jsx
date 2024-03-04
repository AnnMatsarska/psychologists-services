import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
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
            <NavLink to="/register">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/login">Registration</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
