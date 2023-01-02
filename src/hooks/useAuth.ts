import { useMutation } from 'react-query';
import { useAuthState } from './../contexts/AuthContext';
import { getAuth, setToken } from '../api';
import authStorage from '../storages/authStorage';
export const useAuth = () => {
    const [ ,setAuth] = useAuthState();
    return useMutation(getAuth, {
        onError: (e) => {
            throw new Error("AUTH ERROR")
        },
        onSuccess: (data) => {
            setAuth(data);
            setToken(data);
            authStorage.set(data);
        },
    });
}