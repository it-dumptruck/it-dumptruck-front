import React, { useEffect, useState } from 'react';
import { useMatch, useRoutes } from 'react-router-dom';
import { getDumpsLists } from '../../api/dumps';
import { IDump } from '../../api/types';
import { RouteList } from '../../App';
import DumpList from '../../components/DumpList';
import Header from '../../components/Header';
import DefaultTemplate from '../../templates/DefaultTemplate';

const HomePage = () => {
    const [dumps, setDumps] = useState<IDump[]>();
    useEffect( () => {
        (async () => {
            const data = await getDumpsLists();
            setDumps(data);
        })();
    }, []);
    // position:absolute; top:-999px; left:-999px
    if (!dumps) return <div>Loading...</div>;

    return (
        <DefaultTemplate>
            <DumpList dumps={dumps} />
        </DefaultTemplate>
    );
};

export default HomePage;
