import { Navigation } from 'components/Navigation/Navigation';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <p className={css.logoText}>
          <span className={css.logoSpan}>psychologists.</span>services
        </p>
        <Navigation />
      </div>
    </header>
  );
};
