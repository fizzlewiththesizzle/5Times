import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TV from './TV';
 
 const App = () => (
  <HashRouter>
    <Routes>
    <Route
      exact
      path='/'
      element={<Home/>}
    />
    <Route
      exact
      path='/TV'
      element={<TV/>}
    />
    </Routes>
  </HashRouter>
)

export default App