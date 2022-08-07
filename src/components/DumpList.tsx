import React from 'react';
import { IDump, IDumpItem } from '../api/types';
import DumpItem from './DumpItem';

type DumpListProps = {
    dumps: IDump[];
}

const DumpList: React.FC<DumpListProps> = ({dumps}) => {
    return (
        <>
            {
                dumps.map((item: IDump) => {
                    return <>
                        <div style={{ margin: '1.5rem 0', fontSize: '2rem', fontWeight: 'bold' }}>{item.groupName}</div>
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