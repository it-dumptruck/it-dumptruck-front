import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <nav className="relative">
                {
                    dumps.map((item: IDump) => {
                        return (
                            item.dumps.map((dump: IDumpItem) => {
                                return <Link to={`/dumps/${dump.dumpID}`} className="absolute -top-96 -left-96 focus:static">{ item.groupName + ' ' + dump.dumpName }</Link>
                            })
                        )
                    })
                }
            </nav>
            {
                dumps.map((item: IDump) => {
                    return (
                    <div className="mb-10 last:mb-0" aria-labelledby={"dumpgroup-" + item.groupName.toLowerCase()}>
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