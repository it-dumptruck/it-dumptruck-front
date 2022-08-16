import React from 'react';

export default ({ className, children }: any) => {
    return (
        <button className={`bg-zinc-100 px-4 py-2 text-sm rounded shadow hover:shadow-md transition-all hover:bg-zinc-200 ${className}`} role="button">{ children }</button>
    );
};