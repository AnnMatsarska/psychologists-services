import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <>
      <div className={css.layout}>
        <AppBar />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
        />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};
