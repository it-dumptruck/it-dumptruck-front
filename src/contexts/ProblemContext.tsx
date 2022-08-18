import React, { createContext,useContext,useState } from 'react';
import { Problem } from '../api/types';
export type ProblemContextState = [Problem[] | null, (prolem: any) => void];

const ProblemContext = createContext<ProblemContextState | null>(null);

export function ProblemContextProvider({ children }: {children:React.ReactNode}) {
    const problemState = useState<Problem[] | null>(null);
    return <ProblemContext.Provider value={problemState}>{ children}</ProblemContext.Provider>
}

export function useProblemState() {
    const problemState = useContext(ProblemContext);
    if(!problemState) throw new Error('error')
    return problemState;
}
