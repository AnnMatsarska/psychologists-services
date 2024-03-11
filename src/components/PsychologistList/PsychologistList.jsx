import css from './PsychologistList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPsychologists } from '../../redux/psychologists/slice';
import { fetchPsychologists } from '../../redux/psychologists/actions';

import { PsychologistItem } from '../PsycologistItem/PsychologistItem';

export const PsychologistList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <ul className={css.list}>
          {psychologists.map(psychologist => (
            <PsychologistItem
              key={psychologist.id}
              psychologist={psychologist}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
