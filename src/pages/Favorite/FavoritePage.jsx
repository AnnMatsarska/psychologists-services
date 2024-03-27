import { FavoritesList } from 'components/FavouritesList/FavoritesList';

import css from './FavoritePage.module.css';
import { ScrollUp } from '../../components/ScrollUp/ScrollUp';

const FavoritePage = () => {
  return (
    <section className={css.section}>
      <div className="container">
        <FavoritesList />
        <ScrollUp />
      </div>
    </section>
  );
};

export default FavoritePage;
