import React from 'react';
import DumpItem from './DumpItem';

const DumpList = ({ name, list}:any) => {
    return (
        <>
             <div style={{ margin: '1.5rem 0', fontSize: '2rem', fontWeight: 'bold' }}>{name}</div>
            {
                list.map((item: any) => {
                    return <DumpItem
                        img={item.img}
                        name={item.name}
                        lastUpdated={item.lastUpdated}
                    />
                })
            }
        </>
    );
};

export default DumpList;