import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const PsychologistPage = lazy(() =>
  import('pages/Psychologist/PsychologistPage')
);
const FavoritePage = lazy(() => import('pages/Favorite/FavoritePage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="psychologists" element={<PsychologistPage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
