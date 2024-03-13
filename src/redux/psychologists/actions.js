import { setPsychologists } from './slice';
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase/config';

export const fetchPsychologists = () => dispatch => {
  const unsubscribe = onValue(ref(db), snapshot => {
    const data = snapshot.val();
    const psychologistsArray = data ? Object.values(data)[0] : [];
    const psychologistsWithId = psychologistsArray.map(psychologist => ({
      ...psychologist,
      id: psychologist.name,
    }));

    dispatch(setPsychologists(psychologistsWithId));
  });

  return () => {
    unsubscribe();
  };
};
