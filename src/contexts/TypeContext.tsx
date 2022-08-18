import React, { createContext, useContext, useState } from "react";

type TypeContextState = [string | null, (data: string | null) => void];

const TypeContext = createContext<TypeContextState | null>(null);

const TypeProvider = ({ children }: {children: React.ReactNode}) => {
    const type = useState<string | null>(null);
    return <TypeContext.Provider value={type}>{children}</TypeContext.Provider>
}

const useTypeState = () => {
    const type = useContext(TypeContext);
    if (!type) throw new Error("is not exist Type Context");
    return type;
}