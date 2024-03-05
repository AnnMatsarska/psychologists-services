import { Navigation } from 'components/Navigation/Navigation';
import css from './AppBar.module.css';
import { UserAuth } from 'components/UserAuth/UserAuth';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
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
          <UserAuth />
        </nav>
      </div>
    </header>
  );
};
