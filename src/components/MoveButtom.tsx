import React, { ReactNode, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useData from '../hooks/useData';
import Button from './Button';

const MoveButton = ({dumpId, go,children ,isFetching, keyNumber}: {dumpId: string, children: ReactNode, go : string | undefined, isFetching: boolean, keyNumber: number}) => {
    // const { dumpId, questionId }: { dumpId: string, questionId: number } = useParams() as any;
    const navigate = useNavigate();
    const goNext = useCallback(() => {
        navigate(`/dumps/${dumpId}/${go}`);
    }, [navigate, dumpId, go]);

    const onKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.keyCode === keyNumber) goNext();
    }, [goNext,keyNumber]);

    return <Button className="px-8 sm:px-16 py-4" onClick={goNext} disabled={ !go || isFetching} onKeyDown={onKeyDown}>{!go ? "loading..." : children}</Button>
}

export default MoveButton;