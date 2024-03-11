import { setPsychologists } from './slice';
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase/config';
import { v4 as uuidv4 } from 'uuid';

export const fetchPsychologists = () => dispatch => {
  const unsubscribe = onValue(ref(db), snapshot => {
    const data = snapshot.val();
    const psychologistsArray = data ? Object.values(data)[0] : [];
    const psychologistsWithId = psychologistsArray.map(psychologist => ({
      ...psychologist,
      id: uuidv4(),
    }));
    dispatch(setPsychologists(psychologistsWithId));
  });

  return () => {
    unsubscribe();
  };
};
