import { Navigation } from 'components/Navigation/Navigation';
import css from './AppBar.module.css';
import { UserAuth } from 'components/UserAuth/UserAuth';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSlice';

export const AppBar = () => {
  const user = useSelector(selectUser);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.navWrapper}>
          <NavLink to="/">
            <p className={css.logoText}>
              <span className={css.logoSpan}>psychologists.</span>services
            </p>
          </NavLink>
          <Navigation />
          {user.currentUser !== null ? <UserMenu /> : <UserAuth />}
          {/* <UserMenu />
          <UserAuth /> */}
        </nav>
      </div>
    </header>
  );
};
