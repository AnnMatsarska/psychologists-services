import { Navigation } from 'components/Navigation/Navigation';
import css from './AppBar.module.css';
import { UserAuth } from 'components/UserAuth/UserAuth';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.navWrapper}>
          <p className={css.logoText}>
            <span className={css.logoSpan}>psychologists.</span>services
          </p>
          <Navigation />
          <UserAuth />
        </nav>
      </div>
    </header>
  );
};
