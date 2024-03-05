import { Navigation } from 'components/Navigation/Navigation';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
      </div>
    </header>
  );
};
