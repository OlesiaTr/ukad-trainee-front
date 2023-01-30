// Core
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Components
import { SharedLayout } from './SharedLayout';

// Pages
const Home = lazy(() => import('../pages/Home/Home'));
const Products = lazy(() => import('../pages/Products/Products'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
