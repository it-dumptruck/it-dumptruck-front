import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useMatch, useRoutes } from 'react-router-dom';
import client, { getAuth, getDumpsLists, setToken } from '../../api';
import { IDump } from '../../api/types';
import DumpList from '../../components/DumpList';
import Loading from '../../components/Loading';
import DefaultTemplate from '../../templates/DefaultTemplate';

const HomePage = () => {
    const { data: auth, isLoading: authLoading } = useQuery('auth', getAuth);
    const { data: dumps, isLoading: dumpsLoading, refetch, isSuccess } = useQuery<IDump[]>('dumps', getDumpsLists, {
        enabled: false
    });

    useEffect(() => {
        refetch();
    },auth)

    return (
        <DefaultTemplate>
            <h2 className="sr-only">덤프 목록</h2>
            {
                dumpsLoading ? <Loading title="덤프 목록을 불러오는 중.." /> :
                isSuccess ? <DumpList dumps={ dumps } /> : <Loading title="오류발생 삐빅! 삐빅! 다시 시도해주세요." />
            }
        </DefaultTemplate>
    );
};

export default HomePage;
