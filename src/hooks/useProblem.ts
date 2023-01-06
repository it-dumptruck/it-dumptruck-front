import { useAuthState } from './../contexts/AuthContext';
import { useAuth } from './useAuth';
import { Problem } from './../api/types.d';
import { useQuery } from 'react-query';
import { getProblem } from "../api";

const staletime = 60 * 60 * 24 * 1000;

export default function useProblem({
    dumpId,
    questionId,
    type,
}: any) {
    const [auth] = useAuthState();
    const { mutateAsync } = useAuth();
    const data = useQuery<Problem>(
        ['question', dumpId, questionId], () => getProblem(dumpId, questionId, type), {
            enabled: !!auth,
            retry: 0,
            staleTime: staletime,
            cacheTime: staletime,
            onError: async (error: any) => {
                if (error.response.status === 401) {
                    await mutateAsync();
                    data.refetch();
                }
            } 
        });
    return data;
}