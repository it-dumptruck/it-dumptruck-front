import React, { useCallback } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import { Problem, Problems } from '../api/types';
import useProblem from '../hooks/useProblem';
import useToggleMark from '../hooks/useToggleMark';
import Star from './Star';


const StarToggleButton = ({ dumpId, questionId, type }: { dumpId: string, questionId: number, type: string }) => {
    const data = useQueryClient().getQueryData<Problem>(['question', dumpId, questionId])
    const { data: problem } = useProblem({dumpId, questionId, type});
    const { mutate } = useToggleMark();
    
    const toggle = useCallback((e: any) => {
        mutate({ dumpId, questionId, mark: !data?.marked });
    },[mutate,dumpId, questionId, data?.marked ])

    return (<button role="button" aria-label="마킹하기/마킹해제" onClick={toggle}>
       { data?.marked ? <FaStar className="text-2xl mr-2 text-yellow-400" />
                : <FaRegStar className="text-2xl mr-2 text-zinc-300" />}
    </button>);
} 

export default StarToggleButton;