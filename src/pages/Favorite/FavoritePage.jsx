import { FavoritesList } from 'components/FavouritesList/FavoritesList';

import css from './FavoritePage.module.css';
import { ScrollUp } from '../../components/ScrollUp/ScrollUp';

const FavoritePage = () => {
  return (
    <div className="container">
      <section className={css.section}>
        <FavoritesList />
        <ScrollUp />
      </section>
    </div>
  );
};

export default FavoritePage;
