import React, { useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IDump, IDumpItem } from '../api/types';
import Button from './Button';
import LastUpdated from './lastUpdated';

const DumpItem = ({ image, dumpName, lastUpdated, dumpID }: IDumpItem) => {
    const navigate = useNavigate();

    const moveSequence = useCallback(() => {
        navigate(`/dumps/${dumpID}`)
    }, []);

    const moveRandom = useCallback(() => {
        navigate(`/dumps/${dumpID}/1`)
    }, []);

    const moveMarked = useCallback(() => {
        navigate(`/dumps/${dumpID}/marked`)
    }, []);

    return (
        <div className="xl:basis-1/2 shrink-0 shadow-sm hover:shadow-md transition-shadow border border-zinc-200 rounded m-2 py-2 px-2 sm:px-4 sm:flex sm:justify-between">
            <div className="flex mr-4">
                <img src={image} className="w-16 sm:w-32 h-16 sm:h-32" alt="덤프 로고" />
                
                <div className="flex flex-col ml-4 justify-between">
                    <div className="text-lg sm:text-xl tracking-wide">{dumpName}</div>
                    <LastUpdated timestamp={ lastUpdated } />
                </div>
            </div>
            <div className="flex mt-4 sm:mt-0 sm:flex-col justify-center flex-shrink-0">
                <Button className="my-1 mx-1 sm:mx-0" onClick={ moveSequence }>차례로 풀기</Button>
                <Button className="my-1 mx-1 sm:mx-0" onClick={ moveRandom }>무작위 풀기</Button>
                <Button className="my-1 mx-1 sm:mx-0" onClick={ moveMarked }>마킹문제풀기</Button>
            </div>
        </div>
    );
};

export default DumpItem;