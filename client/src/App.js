import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { inject } from '@vercel/analytics';

import Home from './Home';
import TV from './TV';
import Month from './Month';

inject();

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