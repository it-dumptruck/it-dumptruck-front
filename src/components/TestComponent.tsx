import React, { useEffect } from 'react';
import useProblem from '../hooks/useProblem';
import useToggleMark from '../hooks/useToggleMark';

const TestComponent = ({ dumpId, questionId, type }: { dumpId: string, questionId: number, type: string }) => {
    
    const { data, isFetching, isRefetching } = useProblem({dumpId, questionId, type});
    const { isLoading, isPaused, status } = useToggleMark();
    console.log(status);
   
    return <>
        { status === 'idle' ? `loading...` : data?.id }
        {isLoading ? `loding...` : data?.id}
        { isPaused ? `loding...` : data?.id}

    </>
} 

export default TestComponent