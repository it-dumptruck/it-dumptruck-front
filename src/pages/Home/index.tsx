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
    const { data: dumps, isLoading: dumpsLoading, refetch } = useQuery<IDump[]>('dumps',getDumpsLists, {
        enabled: false
    });
    // const { data: dumps, isLoading: dumpsLoading, refetch } = useQuery<IDump[]>('dumps',async () => {
    //     const { data } = await client.get('/dumps', { headers: { 'token': auth.token } })
    //     return data
    // }, {
    //     enabled: false
    // });
    
    if (!authLoading) { 
        setToken(auth.token)
        refetch()
    }
    if (dumpsLoading) {
        return <div>loading...</div>
    }


    return (
        <DefaultTemplate>
            {
                dumpsLoading ? <DumpList dumps={dumps} /> : <div>error..</div>
            }
        </DefaultTemplate>
    );
};

export default HomePage;
