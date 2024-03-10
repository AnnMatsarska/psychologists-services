import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

const AuthContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUser({ id: user.uid, email: user.email, name: user.name }));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [dispatch]);

  return null; // No need to render anything in this higher-level component
};

export default AuthContainer;
