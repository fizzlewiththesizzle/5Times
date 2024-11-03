import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import Home from './Home';
import TV from './TV';
import Month from './Month';
import Vertical from './Vertical';
import Lookup from './Lookup';

inject();
injectSpeedInsights();

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
      <Route
        exact
        path='/Vertical'
        element={<Vertical />}
      />
      <Route
        exact
        path='/Lookup'
        element={<Lookup />}
      />
    </Routes>
  </HashRouter>
);

export default App;