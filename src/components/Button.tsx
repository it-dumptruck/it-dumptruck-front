import React from 'react';

const Button = ({ children }: any) => {
    return (
        <button className="my-1 mx-2 sm:mx-0 bg-zinc-100 px-4 py-2 text-sm rounded shadow hover:shadow-md transition-all hover:bg-zinc-200" role="button">{ children }</button>
    );
};

export default Button;