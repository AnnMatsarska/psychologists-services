import css from './PsychologistList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPsychologists,
  selectCurrentPage,
  selectItemsPerPage,
  nextPage,
  resetStateCars,
} from '../../redux/psychologists/slice';
import { fetchPsychologists } from '../../redux/psychologists/actions';

import { PsychologistItem } from '../PsycologistItem/PsychologistItem';

export const PsychologistList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  useEffect(() => {
    dispatch(fetchPsychologists());

    return () => {
      dispatch(resetStateCars());
    };
  }, [dispatch]);

  const displayPsychologists = psychologists.slice(
    0,
    currentPage * itemsPerPage
  );

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
      {displayPsychologists.length < psychologists.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}
    </>
  );
};
