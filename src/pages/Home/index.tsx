import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useMatch, useRoutes } from 'react-router-dom';
import client, { getAuth, getDumpsLists, setToken } from '../../api';
import {  IDump } from '../../api/types';
import DumpList from '../../components/DumpList';
import DefaultTemplate from '../../templates/DefaultTemplate';

const HomePage = () => {
    const { data: auth, isLoading: authLoading } = useQuery('auth', getAuth);
    const { data: dumps, isLoading: dumpsLoading, refetch,isSuccess } = useQuery<IDump[]>('dumps',getDumpsLists, {
        enabled:false
    });

    useEffect(() => {
        refetch();
    },auth)
    if(dumpsLoading) return <div>test</div>

    return (
        <DefaultTemplate>
            {
                isSuccess ? <DumpList dumps={dumps} /> : <div>error..</div>
            }
        </DefaultTemplate>
    );
};

export default HomePage;
