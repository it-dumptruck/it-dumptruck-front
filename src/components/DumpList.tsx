import React, { useEffect } from 'react';
import { IDump, IDumpItem } from '../api/types';
import DumpItem from './DumpItem';

type DumpListProps = {
    dumps: IDump[];
}

const DumpList: React.FC<DumpListProps> = ({ dumps }) => {
    useEffect(() => {
        // console.log("test")
    })
    return (
        <>
            {
                dumps.map((item: IDump) => {
                    return <>
                        <h3 style={{ margin: '1.5rem 0',  fontWeight: 'bold' }}>{item.groupName}</h3>
                        {
                            item.dumps.map((dump: IDumpItem) => {
                                return <DumpItem
                                    dumpID={ dump.dumpID}
                                    image={dump.image}
                                    dumpName={dump.dumpName}
                                    lastUpdated={dump.lastUpdated}
                                />
                            })
                        }
                        </>
                })
            }
        </>
    );
};

export default DumpList;