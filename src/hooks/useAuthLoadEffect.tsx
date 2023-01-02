import { useEffect } from "react";
import { useAuthState } from "../contexts/AuthContext";
import authStorage from "../storages/authStorage";
import { useAuth } from "./useAuth";

export default function useAuthLoadEffect() {
    const { mutateAsync } = useAuth();
    useEffect(() => {
        const func = async () => {
            const auth = await authStorage.get();
            if (!auth) {
                await mutateAsync();
            }
        }
        func();
    }, [mutateAsync]);
}