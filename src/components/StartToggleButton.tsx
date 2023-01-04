import React, { useCallback } from 'react';
import { QueryClient, useQueryClient } from 'react-query';
import { Problems } from '../api/types';
import Star from './Star';


const StarToggleButton = ({dumpId, questionId}:{dumpId: string, questionId: number}) => {
    const queryClient = useQueryClient();

    const questionList = queryClient.getQueriesData<Problems>(['questionList', dumpId])[0][1].lists.filter(i => i.questionID == questionId);

    const toggle = useCallback((e : any) => {
    },[])

    return (<button role="button" aria-label="마킹하기/마킹해제" onClick={() => { }}>
        <Star checked={false} />
    </button>);
} 

export default StarToggleButton;