import { isEditable } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import { isError, useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getDumpsLists } from "../api";
import { IDump } from "../api/types";
import { useAuthState } from "../contexts/AuthContext";

const staletime = 60 * 60 * 24 * 1000;
const useDumps = () => {
    const [auth] = useAuthState();
    const navigate = useNavigate();
    
    return useQuery<IDump[]>(['dumps'], getDumpsLists, {
        enabled: !!auth,
        retry: 0,
        staleTime: staletime,
        cacheTime: staletime,
        onError:  (error: any) => {
            navigate(`/errors/${error.response.status}`);
        }
    });
}

export default useDumps;