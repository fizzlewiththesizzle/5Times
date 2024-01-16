import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./Home'));
const TV = lazy(() => import('./TV'));
const Month = lazy(() => import('./Month'));

const App = () => (
  <HashRouter>
    <Routes>
      <Route
        exact
        path='/'
        element={<Home />}
      />
      <Route
        exact
        path='/TV'
        element={<TV />}
      />
      <Route
        exact
        path='/Month'
        element={<Month />}
      />
    </Routes>
  </HashRouter>
);

export default App;
