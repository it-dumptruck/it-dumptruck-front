import { useEffect, useLayoutEffect } from "react";
import { useAuthState } from "../contexts/AuthContext";
import authStorage from "../storages/authStorage";
import { useAuth } from "./useAuth";

export default function useAuthLoadEffect() {
    const [authState, usetAuthState] = useAuthState();
    const { mutateAsync } = useAuth();
    useEffect(() => {
        if (authState) return;
        const func = async () => {
            const auth = authStorage.get();
            if (!auth) {
                await mutateAsync();
            }
        }
        func();
    }, [mutateAsync]);
}