import React, { ReactComponentElement } from 'react';
import { useAuthState } from '../contexts/AuthContext';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import Loading from './Loading';


export default function AuthComponent({children}:any) {
    const [auth] = useAuthState();
    useAuthLoadEffect();
    if (!auth) {
        return  <Loading title="유저 정보 세팅중.." /> 
    }
    return <>{children}</>
}