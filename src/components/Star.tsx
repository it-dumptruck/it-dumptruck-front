import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default ({ checked, onClick }: { checked?: boolean, onClick:() => void }) => {
    return (
        <>
            {
                checked
                ? <FaStar className="text-2xl mr-2 text-yellow-400" />
                : <FaRegStar className="text-2xl mr-2 text-zinc-300" />
            }
        </>
    );
};