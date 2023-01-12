import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getMarkedProblems, getProblems } from "../api";
import { Problems } from "../api/types";
import { useAuthState } from "../contexts/AuthContext";
import { useAuth } from "./useAuth";

const getProblemsWrapFn = ({markedOnly, dumpId}:{ markedOnly: boolean, dumpId: any }) => {
    return markedOnly ? getMarkedProblems(dumpId) : getProblems(dumpId);
}
const staletime = 60 * 60 * 24 * 1000;

export default function useQuestions({ markedOnly, dumpId }: { markedOnly: boolean, dumpId: string }) {
    const { mutateAsync } = useAuth();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [auth] = useAuthState();
    const mutation = useMutation(getProblemsWrapFn, {
        onMutate: (params) => {
            // const { markedOnly, dumpId } = params;
            // const prevState = queryClient.getQueryData(['questionList', dumpId]);
            // if (!prevState) return;
            // queryClient.setQueryData(['questionList', dumpId], [...prevState]);
        },
        onSuccess: (data) => {
            console.log(data);
            queryClient.setQueryData(['questionList', dumpId], {...data});
        },
        onError: () => { }
    });
    const {data, isLoading, isFetching, refetch} = useQuery<Problems>(['questionList', dumpId], () => getProblemsWrapFn({ markedOnly, dumpId }), {
        enabled: !!auth,
        retry: 0,
        staleTime: staletime,
        cacheTime: staletime,
        suspense:true,
        onError: async (error: any) => {
            if (error.response.status === 401) {
                await mutateAsync();
                refetch();
            } else {
                navigate(`/errors/${error.response.status}`);
            }
            
        }
    });
    return {data, isLoading: isLoading || isFetching || mutation.isLoading, refetch: mutation.mutate};
}