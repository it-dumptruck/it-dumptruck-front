import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getMarkedProblems, getProblems } from "../api";
import { Problems } from "../api/types";
import { useAuthState } from "../contexts/AuthContext";
import { useAuth } from "./useAuth";

const getProblemsWrapFn =  (markedOnly:boolean ,dumpId: any) => {
    return markedOnly ? getMarkedProblems(dumpId) : getProblems(dumpId);
}
const staletime = 60 * 60 * 24 * 1000;

export default function useQuestions({ markedOnly, dumpId }: { markedOnly: boolean, dumpId: string }) {
    const { mutateAsync } = useAuth();
    const navigate = useNavigate();
    const [auth] = useAuthState();
    const data =  useQuery<Problems>(['questionList', dumpId], () => getProblemsWrapFn(markedOnly, dumpId), {
        enabled: !!auth,
        retry: 0,
        staleTime: staletime,
        cacheTime: staletime,
        onError: async (error: any) => {
            if (error.response.status === 401) {
                await mutateAsync();
                data.refetch();

            } else {
                navigate(`/errors/${error.response.status}`);
            }
            
        }
    });

    // const mutate = useMutation();
    return data;
}