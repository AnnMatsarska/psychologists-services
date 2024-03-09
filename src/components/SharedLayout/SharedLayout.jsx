import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import AuthContainer from '../AuthContainer';

export const SharedLayout = () => {
  return (
    <>
      <AuthContainer />
      <div className={css.layout}>
        <AppBar />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};
