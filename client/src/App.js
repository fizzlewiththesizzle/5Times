import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home';
import TV from './TV';
import Month from './Month';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/TV'
        element={<TV />}
      />
      <Route
        path='/Month'
        element={<Month />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
