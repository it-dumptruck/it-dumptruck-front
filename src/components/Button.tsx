import React from 'react';

export default ({ className, children, onClick=null, onKeyDown = null }: {className: string, children: React.ReactNode, onKeyDown?:any, onClick?:any | null | undefined | React.MouseEvent<HTMLButtonElement>}) => {
    return (
        <button onClick={onClick}  className={`bg-zinc-100 px-4 py-2 text-sm rounded shadow hover:shadow-md transition-all hover:bg-zinc-200 ${className}`} role="button"  onKeyDown={ onKeyDown }>{ children }</button>
    );
};