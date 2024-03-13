import css from './FavoritesList.module.css';
import { Filter } from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextPage,
  selectCurrentPage,
  selectFavorites,
  selectFilter,
  selectItemsPerPage,
} from '../../redux/psychologists/slice';
import { PsychologistItem } from '../PsycologistItem/PsychologistItem';
import { applyFilter } from '../../services/applyFilter';

export const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const filter = useSelector(selectFilter);

  const filteredPsychologists = applyFilter(favorites, filter);
  const displayPsychologists = filteredPsychologists.slice(
    0,
    currentPage * itemsPerPage
  );
  const itemsNeedToBeDisplayed =
    displayPsychologists.length < favorites.length &&
    filteredPsychologists.length !== 0;

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  return (
    <>
      <Filter />
      <ul className={css.list}>
        {displayPsychologists.map(item => {
          return <PsychologistItem key={item.id} psychologist={item} />;
        })}
      </ul>
      {itemsNeedToBeDisplayed ? (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      ) : null}
    </>
  );
};
