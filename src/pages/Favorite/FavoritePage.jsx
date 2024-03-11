import { FavoritesList } from 'components/FavouritesList/FavoritesList';

import css from './FavoritePage.module.css';

const FavoritePage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <FavoritesList />
      </div>
    </section>
  );
};

export default FavoritePage;
