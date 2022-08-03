import React from 'react';
import { Link } from 'react-router-dom';
import DumpItem from './DumpItem';

const list = [

{
    name: 'AWS',
    list: [
        { name: "Solution Architext Associate (C02)", lastUpdated: '2022. 07.27', link: '/', img:'' },
        {name: "Solution Architext Associate (C02)", lastUpdated:'2022. 07.27', link:'/', img:''}

    ]
    }
]

const DumpList = () => {
    return (
        <>
            <div style={{margin:'1.5rem 0', fontSize:'2rem', fontWeight:'bold'}}>{list[0].name}</div>
            {
                // list.map((item: any) => {
                //     return 
                // });
            }
        </>
    );
};

export default DumpList;