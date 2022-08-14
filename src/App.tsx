import React from 'react';
import { FiSearch, FiUser } from 'react-icons/fi'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Height from './components/Height';
import HomePage from './pages/Home';
import Problems from './pages/Problems';
import DefaultTemplate from './templates/DefaultTemplate';

export interface RouteList {
  Home: undefined;
}

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={<Problems />} />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    
    
  );
};

export default App;