import { useMutation, useQuery } from 'react-query';
import { useEffect } from 'react';
import { useAuthState } from './../contexts/AuthContext';
import { getAuth, setToken } from '../api';

export const useAuth = () => {
    const [ ,setAuth] = useAuthState();
    return useMutation(getAuth, {
        onError: (e) => {
            console.log("TOKEN ERROR",e);
        },
        onSuccess: (data) => {
            setAuth(data);
            setToken(data);
        },
    });
}