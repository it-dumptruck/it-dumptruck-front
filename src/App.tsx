import React from 'react';
import { FiSearch, FiUser } from 'react-icons/fi'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Height from './components/Height';
import HomePage from './pages/Home';
import DefaultTemplate from './templates/DefaultTemplate';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<HomePage />} />
        
      </Routes>
    </DefaultTemplate>
   
  </BrowserRouter>
    
  );
};

export default App;