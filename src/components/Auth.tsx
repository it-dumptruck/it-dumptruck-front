import React, {  useEffect } from 'react';
import { useAuthState } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import Loading from './Loading';
export default function AuthComponent({children}:any) {
    const [auth] = useAuthState();
    useAuthLoadEffect();
    
    return <>
        {
            auth ?  <>{children} </> : <Loading title="이전 기록 불러오는중.." />
        }
    </>
}