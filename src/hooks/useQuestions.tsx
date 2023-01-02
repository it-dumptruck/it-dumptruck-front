import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getMarkedProblems, getProblems } from "../api";
import { Problems } from "../api/types";

const getProblemsWrapFn =  (markedOnly:boolean ,dumpId: any) => {
    return markedOnly ? getMarkedProblems(dumpId) : getProblems(dumpId);
}
const staletime = 60 * 60 * 24 * 1000;

export default function useQuestions({ markedOnly, dumpId }: { markedOnly: boolean, dumpId: string }) {
    const navigate = useNavigate();

    return useQuery<Problems>(['questionList', dumpId, markedOnly], () => getProblemsWrapFn(markedOnly, dumpId), {
        retry: 0,
        staleTime: staletime,
        cacheTime: staletime,
        onError: async (error: any) => {
            if (error.response.status === 401) {
               
            } else {
                navigate(`/errors/${error.response.status}`);
            }
        }
    });
}