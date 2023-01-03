import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { setMarkProblem } from "../api";
import { useAuth } from "./useAuth";


export default function useToggleMark() {
    const { mutateAsync } = useAuth();
    const navigate = useNavigate();
    const mutate =  useMutation(setMarkProblem, {
        onError: async (error: any) => {
            if (error.response.status === 401) {
                await mutateAsync();

            } else {
                navigate(`/errors/${error.response.status}`);
            }
        }
    });

    return mutate;
}