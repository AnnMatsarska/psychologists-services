import css from './PsychologistList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPsychologists } from '../../redux/psychologists/slice';
import { fetchPsychologists } from '../../redux/psychologists/actions';

export const PsychologistList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1>Psychologists</h1>
        <ul>
          {psychologists.map(psychologist => (
            <li key={psychologist.id}>
              <h2>{psychologist.name}</h2>
              <img src={psychologist.avatar_url} alt={psychologist.name} />
              <p>Experience: {psychologist.experience}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
