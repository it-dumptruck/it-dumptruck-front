import React, { createContext, useContext, useEffect, useState } from "react";
import { Auth } from "../api/types";

export type AuthContextState = [Auth | null, (data: Auth| null) => void];

const AuthContext = createContext<AuthContextState | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const auth = useState<Auth | null>(null);
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuthState = () => {
    const auth = useContext(AuthContext);
    console.log(auth)
    if (!auth) throw new Error("not exist Auth Context");
    return auth;
}