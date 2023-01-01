import { useMutation, useQuery } from "react-query";
import { getDumpsLists } from "../api";
import { IDump } from "../api/types";
import { useAuthState } from "../contexts/AuthContext";
import { useAuth } from './useAuth';
const useDumps = () => {
    const [auth] = useAuthState();
    const { mutate:authMutate } = useAuth();
    const { data , refetch} = useQuery<IDump[]>(['dumps', 'amazone'], getDumpsLists, {
        enabled: !!auth,
        retry: 1,
        onError: async (error: any) => {
            if (error.response.status === 401) {
                await authMutate();
            } else {
                // navigate(`/errors/${error.response.status}`);
            }
        }
    });

    return {dumps: data};
    // const { mutate } = useMutation();

}

export default useDumps;