import React from 'react';
import { FiSearch, FiUser } from 'react-icons/fi'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Height from './components/Height';
import HomePage from './pages/Home';
import Problems from './pages/Problems';
import DefaultTemplate from './templates/DefaultTemplate';

export interface RouteList {
  Home: undefined;
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problems" element={<Problems />} />

      </Routes>
   
  </BrowserRouter>
    
  );
};

export default App;