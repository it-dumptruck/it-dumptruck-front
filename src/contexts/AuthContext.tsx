import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { getAuth, setToken } from "../api";
import { Auth } from "../api/types";
import authStorage from "../storages/authStorage";

export type AuthContextState = [Auth | null, (data: Auth| null) => void];

const AuthContext = createContext<AuthContextState | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState<Auth | null>(null);
    useEffect(() => {
        (async () => {
            const getTokenRequest = async () => {
                const token = await getAuth();
                return token;
            }
            let localAuthData = authStorage.get();
            if (!localAuthData?.uid) {
                localAuthData = await getTokenRequest();
            }
            setAuth(localAuthData);
            setToken(localAuthData);
            authStorage.set(localAuthData);
        })();
        
    }, [setAuth, setToken]);
    return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
}

export const useAuthState = () => {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error("not exist Auth Context");
    return auth;
}