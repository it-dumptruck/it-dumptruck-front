import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IDump, IDumpItem } from '../api/types';
import Button from './Button';
import LastUpdated from './lastUpdated';

const DumpItem = ({ image, dumpName, lastUpdated, dumpID }: IDumpItem) => {
    return (
        <div className="xl:basis-1/2 shrink-0 shadow-sm hover:shadow-md transition-shadow border border-zinc-200 rounded m-2 py-2 px-4 sm:flex sm:justify-between">
            <div className="flex mr-4">
                <img src={image} className="w-24 sm:w-32 h-24 sm:h-32" alt="덤프 로고" />
                
                <div className="flex flex-col ml-4 justify-between">
                    <div className="text-xl tracking-wide">{dumpName}</div>
                    <LastUpdated timestamp={ lastUpdated } />
                </div>
            </div>
            <div className="flex mt-4 sm:mt-0 sm:flex-col justify-center flex-shrink-0">
                <Button className="my-1 mx-2 sm:mx-0">차례로 풀기</Button>
                <Button className="my-1 mx-2 sm:mx-0">무작위로 풀기</Button>
                <Button className="my-1 mx-2 sm:mx-0">마킹문제 풀기</Button>
            </div>
        </div>
    );
};

export default DumpItem;