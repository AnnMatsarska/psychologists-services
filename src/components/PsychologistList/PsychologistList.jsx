import css from './PsychologistList.module.css';
import { useEffect, useRef } from 'react';
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
import { Dropdown } from '../Dropdown/Dropdown';

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
      <div>
        <label className={css.filterLabel}>Filters</label>
        <Dropdown defaultOption={defaultFilter} onSelect={handleFilterChange}>
          <span value="A to Z">A to Z</span>
          <span value="Z to A">Z to A</span>
          <span value="Less than 10$">Less than 10$</span>
          <span value="Greater than 10$">Greater than 10$</span>
          <span value="Popular">Popular</span>
          <span value="Not popular">Not popular</span>
          <span value="Show all">Show all</span>
        </Dropdown>
      </div>
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
