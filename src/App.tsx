import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Problems from './pages/Problems';

export interface RouteList {
    Home: undefined;
}

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/problems" element={<Problems />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;