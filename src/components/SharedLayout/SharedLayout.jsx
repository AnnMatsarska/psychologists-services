import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <>
      <div>
        <AppBar />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
        />
        {/* <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main> */}
      </div>
    </>
  );
};
