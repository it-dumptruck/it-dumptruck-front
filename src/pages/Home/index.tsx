import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useMatch, useNavigate, useParams, useRoutes } from 'react-router-dom';
import { isIfStatement } from 'typescript';
import client, { getAuth, getDumpsLists, setToken, setUid } from '../../api';
import { IDump } from '../../api/types';
import DumpList from '../../components/DumpList';
import Loading from '../../components/Loading';
import { useAuthState } from '../../contexts/AuthContext';
import { useAuth } from '../../hooks/useAuth';
import useDumps from '../../hooks/useDumps';

import DefaultTemplate from '../../templates/DefaultTemplate';

const HomePage = () => {
    // const { uid } = useParams();
    // const [auth, setAuth] = useAuthState();
    // const navigate = useNavigate();
    // const { mutate: authMutate, isLoading: isAuthLoading } = useAuth();
    // const { data: dumps, isLoading: dumpsLoading, refetch, isSuccess,isFetching,isError,isIdle } = useQuery<IDump[]>('dumps', getDumpsLists, {
    //     enabled: !!auth,
    //     retry: 1,
    //     onError: async (error: any) => {
    //         if (error.response.status === 401) {
    //             await authMutate();
    //             refetch();
    //         } else {
    //             navigate(`/errors/${error.response.status}`);
    //         }
    //     }
    // });

    // useEffect(() => {
    //     console.log("test");
    //     console.log("uid", uid);
    // })
    // useEffect(() => {
    //     if (!uid) return;
    //     setUid(uid);
    //     authMutate();
    // }, [setUid, authMutate])

    const { data: dumps,isLoading, isSuccess, isError, refetch} = useDumps();
    useEffect(() => {
        if (isError) {
            refetch();
        }
    }, [isError,refetch]);
    return (
        <>
            <h2 className="sr-only">덤프 목록</h2>
            {
                isLoading ? <Loading title="덤프 목록을 불러오는 중.." /> :
                isSuccess ? <DumpList dumps={ dumps } /> : <Loading title="덤프 목록을 불러올 수 없습니다. 다시 시도해주세요." />
            }
        </>
        // <DefaultTemplate>
        //     <h2 className="sr-only">덤프 목록</h2>
        //     <Suspense fallback={<Loading title="덤프 목록을 불러오는 중.." />}>
        //         <DumpList dumps={data!} />

        //     </Suspense>
        // </DefaultTemplate>
    );
};

export default HomePage;
