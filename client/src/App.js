import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./Home'));
const TV = lazy(() => import('./TV'));
const Month = lazy(() => import('./Month'));

const App = () => (
  <HashRouter>
    <Suspense fallback={<div></div>}>
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
    </Suspense>
  </HashRouter>
);

export default App;
