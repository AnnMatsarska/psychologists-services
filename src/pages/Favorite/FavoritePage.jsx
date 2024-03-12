import { FavoritesList } from 'components/FavouritesList/FavoritesList';

import css from './FavoritePage.module.css';

const FavoritePage = () => {
  return (
    <div className={css.container}>
      <section className={css.section}>
        <FavoritesList />
      </section>
    </div>
  );
};

export default FavoritePage;
