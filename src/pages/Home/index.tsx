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
       
    );
};

export default HomePage;
