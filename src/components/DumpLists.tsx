import React from 'react';
import { Link } from 'react-router-dom';
import DumpItem from './DumpItem';
import DumpList from './DumpList';

const list = [

    {
        name: 'AWS',
        list: [
            { name: "Solution Architext Associate (C02)", lastUpdated: '2022. 07.27', link: '/', img:'https://via.placeholder.com/150' },
            {name: "Solution Architext Associate (C02)", lastUpdated:'2022. 07.27', link:'/', img:'https://via.placeholder.com/150'}

        ]
    }
]

const DumpLists = () => {
    return (
        <>
            {
                list.map((item :any) => {
                    return <DumpList name={item.name} list={item.list} />
                })
            }
        </>
    );
};

export default DumpLists;