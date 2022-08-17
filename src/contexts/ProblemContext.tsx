import React, { createContext,useContext,useState } from 'react';
import { Problem } from '../api/types';
type ProblemContextState = [Problem[] | null, (prolem: any) => void];

const ProblemContext = createContext<ProblemContextState | null>(null);

export function ProblemContextProvider({ children }: {children:React.ReactNode}) {
    const problemState = useState<Problem[] | null>(null);
    return <ProblemContext.Provider value={problemState}>{ children}</ProblemContext.Provider>
}

export function useProblemState() {
    const problemState = useContext(ProblemContext);
    if (!problemState) return null;
    return problemState;
}

/*
/dumps/{dump-id}/{problem-id}
문제페이지


/dumps/{dump-id/marked
마킹된 문제 리스트sdf
*/