import { isEditable } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import { isError, useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getDumpsLists } from "../api";
import { IDump } from "../api/types";
import { useAuthState } from "../contexts/AuthContext";
import { useAuth } from "./useAuth";

const staletime = 60 * 60 * 24 * 1000;
const useDumps = () => {
    const { mutateAsync } = useAuth();
    const [auth] = useAuthState();
    const navigate = useNavigate();
  
    const data =  useQuery<IDump[]>(['dumps'], getDumpsLists, {
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
        },
        onSuccess: (data) => {
           
        }
    });
    return data;
}

export default useDumps;