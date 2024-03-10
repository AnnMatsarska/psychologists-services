import React from 'react';
import { ReactComponent as Avatar } from '../../images/avatar.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSlice';
import css from './UserMenu.module.css';

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';

export const UserMenu = () => {
  const { currentUser } = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(currentUser);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={css.userWrapper}>
        <Avatar />
        {/* <p>{currentUser.name}</p> */}
        <button type="button" onClick={handleLogOut} className={css.logoutBtn}>
          Log Out
        </button>
      </div>
    </>
  );
};
