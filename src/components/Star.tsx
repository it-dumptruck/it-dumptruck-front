import React, { useCallback } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

export default ({ checked }: { checked?: boolean }) => {
    
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