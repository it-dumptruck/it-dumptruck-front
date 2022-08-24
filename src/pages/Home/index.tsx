import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useMatch, useNavigate, useParams, useRoutes } from 'react-router-dom';
import { isIfStatement } from 'typescript';
import client, { getAuth, getDumpsLists, setToken, setUid } from '../../api';
import { IDump } from '../../api/types';
import DumpList from '../../components/DumpList';
import Loading from '../../components/Loading';
import { useAuthState } from '../../contexts/AuthContext';
import { ProblemContextState, useProblemState } from '../../contexts/ProblemContext';
import { useAuth } from '../../hooks/useAuth';
import useAuthLoadEffect from '../../hooks/useAuthLoadEffect';
import authStorage from '../../storages/authStorage';
import DefaultTemplate from '../../templates/DefaultTemplate';

const HomePage = () => {
    const { uid } = useParams();
    const [auth, setAuth] = useAuthState();
    const navigate = useNavigate();
    const { mutate: authMutate, isLoading: isAuthLoading } = useAuth();
    const { data: dumps, isLoading: dumpsLoading, refetch, isSuccess,isFetching,isError,isIdle } = useQuery<IDump[]>('dumps', getDumpsLists, {
        enabled: !!auth,
        retry: 1,
        onError: async (error: any) => {
            if (error.response.status === 401) {
                await authMutate();
                refetch();
            } else {
                navigate(`/errors/${error.response.status}`);
            }
        }
    });

    useEffect(() => {
        if (!uid) return;
        setUid(uid);
        authMutate();
    }, [setUid, authMutate])

    return (
        <DefaultTemplate>
            <h2 className="sr-only">덤프 목록</h2>
            {
                dumpsLoading ? <Loading title="덤프 목록을 불러오는 중.." /> :
                isSuccess ? <DumpList dumps={ dumps } /> : <Loading title="덤프 목록을 불러올 수 없습니다. 다시 시도해주세요." />
            }
        </DefaultTemplate>
    );
};

export default HomePage;
