import { useMutation, useQueryClient } from "react-query";
import { getProblem, getQuestionList } from "../api";
import { Problem } from "../api/types";
import { useAuth } from "./useAuth";
import useProblem from "./useProblem";
import useToggleMark from "./useToggleMark";


const useData = ({ dumpId, questionId, type }: { dumpId: string, questionId: number, type: string }) => {
    const queryClient = useQueryClient();
    const { mutateAsync } = useAuth();

    const { data, isLoading, isFetching } = useProblem({ dumpId, questionId, type });
    const { mutate, isLoading:toggleLoading } = useToggleMark();
    
    const { mutate: refetchQuestion } = useMutation(getProblem,{
        onMutate: (params) => {
            const { dumpId, questionToken: questionId, type }: { dumpId: string, questionToken: number, type: string } = params;            
            const prevProblemItemState = queryClient.getQueryData<Problem>(['question', dumpId, +questionId]); 
           
            if (!prevProblemItemState) { 
                return;
            }
            queryClient.setQueryData(['question', dumpId, +questionId], { ...prevProblemItemState, prev_id: null, next_id: null });
            return { prevProblemItemState, params};

        },
        onError: async ({ error, params, context }: any) => {
            if (error.response.status === 401) {
                await mutateAsync();
            }
            queryClient.setQueryData(
                ['question', context.params.dumpId, +context.params.questionId],
                {...context.prevProblemItemState}
            )
        },
        
        onSuccess: (data) => {
            const prevProblemItemState = queryClient.getQueryData<Problem>(['question', dumpId, +questionId]); 
            queryClient.setQueryData(['question', dumpId, +questionId], { ...prevProblemItemState,marked: data.marked,  prev_id: data?.prev_id, next_id:data?.next_id});

        },
    })
    return {
        data,
        isLoading,
        isFetching: isFetching || toggleLoading,
        startToggle: mutate,
        refetchQuestion,
    }
}

export default useData