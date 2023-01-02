import React, {  useEffect } from 'react';
import { useAuthState } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import Loading from './Loading';
export default function AuthComponent({children}:any) {
    const [auth] = useAuthState();
    const { mutateAsync } = useAuth();
    useAuthLoadEffect();
    
    return <>
        {
            auth ?  <>{children} </> : <Loading title="유저 정보 세팅중.." />
        }
      
    </>
}