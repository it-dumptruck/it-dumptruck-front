import React, { useEffect, useState } from 'react';
import { getDumpsLists } from '../../api/dumps';
import { IDump } from '../../api/types';
import DumpList from '../../components/DumpList';
import Header from '../../components/Header';

const HomePage = () => {
    const [dumps, setDumps] = useState<IDump[]>();
    useEffect( () => {
        (async () => {
            const data = await getDumpsLists();
            setDumps(data);
        })();
    }, []);
    
    if (!dumps) return <div>Loading...</div>;

    return (<DumpList dumps={dumps} />);
};

export default HomePage;
