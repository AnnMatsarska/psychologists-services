import css from './PsychologistList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPsychologists,
  selectCurrentPage,
  selectItemsPerPage,
  selectFilter,
  nextPage,
  resetStateCars,
} from '../../redux/psychologists/slice';
import { fetchPsychologists } from '../../redux/psychologists/actions';
import { applyFilter } from '../../services/applyFilter';

import { PsychologistItem } from '../PsycologistItem/PsychologistItem';

export const PsychologistList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchPsychologists());

    return () => {
      dispatch(resetStateCars());
    };
  }, [dispatch]);

  const filteredPsychologists = applyFilter(psychologists, filter);
  const displayPsychologists = filteredPsychologists.slice(
    0,
    currentPage * itemsPerPage
  );
  const itemsNeedToBeDisplayed =
    displayPsychologists.length < psychologists.length &&
    filteredPsychologists.length !== 0;

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  return (
    <>
      <ul className={css.list}>
        {displayPsychologists.map(psychologist => (
          <PsychologistItem key={psychologist.id} psychologist={psychologist} />
        ))}
      </ul>
      {itemsNeedToBeDisplayed ? (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      ) : null}
    </>
  );
};
