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
        <div>
            {
                dumps.map((item: IDump) => {
                    return (
                    <div className="mt-10 first:mt-0" aria-labelledby={"dumpgroup-" + item.groupName.toLowerCase()}>
                        <h3 className="text-2xl font-bold" id={"dumpgroup-" + item.groupName.toLowerCase()}>{item.groupName}</h3>
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 -mx-2">
                            {
                                item.dumps.map((dump: IDumpItem) => {
                                    return <DumpItem
                                        dumpID={dump.dumpID}
                                        image={dump.image}
                                        dumpName={dump.dumpName}
                                        lastUpdated={dump.lastUpdated}
                                    />
                                })
                            }
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default DumpList;