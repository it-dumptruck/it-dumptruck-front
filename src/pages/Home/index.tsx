import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
<<<<<<< HEAD
import { useMatch, useNavigate, useParams, useRoutes } from 'react-router-dom';
import { isIfStatement } from 'typescript';
import client, { getAuth, getDumpsLists, setToken, setUid } from '../../api';
import { IDump } from '../../api/types';
import Ad from '../../components/Ad';
=======
>>>>>>> master
import DumpList from '../../components/DumpList';
import Loading from '../../components/Loading';
import useDumps from '../../hooks/useDumps';
const HomePage = () => {

    const { data: dumps,isLoading, isSuccess} = useDumps();

    return (
        <>
            <h2 className="sr-only">덤프 목록</h2>
            <Ad />
            {
                isLoading ? <Loading title="덤프 목록을 불러오는 중.." /> :
                isSuccess ? <DumpList dumps={ dumps } /> : <Loading title="덤프 목록을 불러올 수 없습니다. 다시 시도해주세요." />
            }
<<<<<<< HEAD
            <Ad />
        </DefaultTemplate>
=======
        </>
>>>>>>> master
    );
};

export default HomePage;
