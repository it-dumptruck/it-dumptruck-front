import { QueryClient, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { setMarkProblem } from "../api";
import { Problem } from "../api/types";
import { useAuth } from "./useAuth";
import useProblem from "./useProblem";

export default function useToggleMark() {
    const queryClient = useQueryClient();
    const { mutateAsync } = useAuth();
    const navigate = useNavigate();
    const mutate = useMutation({
        mutationFn: setMarkProblem,
        onMutate:  (params) => {
            const { dumpId, questionId, mark }: { dumpId: string, questionId: number, mark: boolean }  = params;
            const prevProblemItemState = queryClient.getQueryData<Problem>(['question', dumpId, questionId])
            queryClient.setQueryData(['question', dumpId, +questionId], { ...prevProblemItemState, marked: mark });
            return {prevProblemItemState, params}
        },
        onError: async ({ error, params, context }: any) => {
            console.log(error)
            if (error.response.status === 401) {
                await mutateAsync();
            }
            queryClient.setQueryData(
                ['question', context.params.dumpId, +context.params.questionId],
                {...context.prevProblemItemState}
            )
        },
        onSuccess: async (data) => {

        }
        
    });

    return mutate;
}