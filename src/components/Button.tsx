import React from 'react';

export default ({ className, children, disabled = false, onClick=null, onKeyDown = null }: {className: string, children: React.ReactNode, disabled?: boolean, onKeyDown?:any, onClick?:any | null | undefined | React.MouseEvent<HTMLButtonElement>}) => {
    return (
        <button onClick={onClick}  className={`bg-zinc-100 px-4 py-2 text-sm rounded shadow transition-all ${ disabled ? 'cursor-not-allowed' : 'hover:bg-zinc-200 hover:shadow-md' } ${className}`} role="button"  onKeyDown={ onKeyDown } disabled={ disabled }>
            { children }
        </button>
    );
};