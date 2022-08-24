import { useEffect } from "react";
import { useAuthState } from "../contexts/AuthContext";
import authStorage from "../storages/authStorage";
import { useAuth } from "./useAuth";

export default function useAuthLoadEffect() {
    const { mutate } = useAuth();
    useEffect(() => {
        const func = async () => {
            const auth = authStorage.get()
            console.log(auth);
            if (!auth) {
                await mutate();
            }
        }
        func();
    }, [mutate])
    
}