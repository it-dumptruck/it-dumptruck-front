import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useMatch, useRoutes } from 'react-router-dom';
import client, { getAuth, getDumpsLists, setToken } from '../../api';
import {  IDump } from '../../api/types';
import DumpList from '../../components/DumpList';
import DefaultTemplate from '../../templates/DefaultTemplate';

const Home = () => {
    const { data: auth, isLoading: authLoading } = useQuery('auth', getAuth);
    const { data: dumps, isLoading: dumpsLoading, refetch, isSuccess } = useQuery<IDump[]>('dumps', getDumpsLists, {
        enabled: false
    });

    useEffect(() => {
        refetch();
    },auth)

    return (
        <DefaultTemplate>
            {
                dumpsLoading ? '덤프 목록을 불러오고 있습니다.' :
                isSuccess ? <DumpList dumps={ dumps } /> : '오류발생 삐빅! 삐빅!'
            }
        </DefaultTemplate>
    );
};

export default Home;
