import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const Loading = ({ title }: any) => {
    return (
        <div className="flex flex-col items-center" aria-labelledby="loading-title">
            <ImSpinner2 className="animate-spin w-40 h-40" />
            <h2 className="mt-4 text-2xl" id="loading-title">{ title }</h2>
        </div>
    );
};

export default Loading;