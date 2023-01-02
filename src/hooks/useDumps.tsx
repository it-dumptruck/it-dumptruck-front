import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getDumpsLists } from "../api";
import { IDump } from "../api/types";
import { useAuthState } from "../contexts/AuthContext";
import { useAuth } from './useAuth';

const staletime = 60 * 60 * 24 * 1000;

const useDumps = () => {
    const [auth] = useAuthState();
    const navigate = useNavigate();
    const { mutateAsync: authMutate } = useAuth();
    console.log("auth: ", auth);
    return useQuery<IDump[]>(['dumps'], getDumpsLists, {
        enabled: !!auth,
        retry: 0,
        staleTime: staletime,
        cacheTime: staletime,
        onError: async (error: any) => {
            if (error.response.status === 401) {
                console.log("error...")
                await authMutate();
                
            } else {
                navigate(`/errors/${error.response.status}`);
            }
        }
    });

    // return useQuery<IDump[]>('dumps', getDumpsLists, {
    //     // enabled: !!auth,
    //     retry: 1,
    //     onError: async (error: any) => {
    //         if (error.response.status === 401) {
    //             await authMutate();

    //         } else {
    //             navigate(`/errors/${error.response.status}`);
    //         }
    //     }
    // });


}

export default useDumps;