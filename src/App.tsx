import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ProblemContextProvider } from './contexts/ProblemContext';
import HomePage from './pages/Home';
import ProblemPage from './pages/Problem';
import ProblemsPage from './pages/Problems';


// export interface RouteList {
//   Home: undefined;
//   Problems: undefined;
  
// }

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <ProblemContextProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                        <Route path="/dumps">
                            <Route path="/dumps/:dumpId" element={<ProblemsPage/>} />
                            <Route path="/dumps/:dumpId/:questionToken" element={<ProblemPage/>} />
                        </Route>
                        <Route path="/:uid" element={<HomePage/>} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </ProblemContextProvider>
    );
};

export default App;