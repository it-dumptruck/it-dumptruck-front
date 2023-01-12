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

export default function useQuestionsAction({ markedOnly, dumpId }: { markedOnly: boolean, dumpId: string }) {
    console.log("test2")

    const { mutateAsync } = useAuth();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [auth] = useAuthState();
    const mutate =  useMutation(getProblemsWrapFn, {
        onMutate: (params) => {
            console.log("test3")
            // const { markedOnly, dumpId } = params;
            // const prevState = queryClient.getQueryData(['questionList', dumpId]);
            // if (!prevState) return;
            // queryClient.setQueryData(['questionList', dumpId], [...prevState]);
        },
        onSuccess: (data) => {
            console.log(data);
            queryClient.setQueryData(['questionList', dumpId], {...data});
        },
        onError: () => {

        }
    });
}

