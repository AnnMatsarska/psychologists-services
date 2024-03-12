import css from './FavoritesList.module.css';
import { Filter } from '../Filter/Filter';

export const FavoritesList = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <Filter />
      </div>
    </section>
  );
};
