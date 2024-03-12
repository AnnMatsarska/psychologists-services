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
  setFilter,
} from '../../redux/psychologists/slice';
import { fetchPsychologists } from '../../redux/psychologists/actions';
import { applyFilter } from '../../services/applyFilter';

import { PsychologistItem } from '../PsycologistItem/PsychologistItem';
import { Filter } from '../Filter/Filter';

export const PsychologistList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const filter = useSelector(selectFilter);
  const defaultFilter = 'Show all';

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

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  const handleFilterChange = selectedFilter => {
    dispatch(setFilter(selectedFilter));
  };

  return (
    <>
      <Filter defaultFilter={defaultFilter} onSelect={handleFilterChange} />
      <ul className={css.list}>
        {displayPsychologists.map(psychologist => (
          <PsychologistItem key={psychologist.id} psychologist={psychologist} />
        ))}
      </ul>
      {displayPsychologists.length < psychologists.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}
    </>
  );
};
