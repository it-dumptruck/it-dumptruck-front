import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const AnswerButton = ({ label, text, pressed, answer, onPress, onKeyDown = null, ref = null }: any) => {
    return (
        <button className={`outline-1 outline-offset-2 flex border mt-4 first:mt-0 py-2 px-3 rounded shadow hover:shadow-md transition-all cursor-pointer w-full items-center ${pressed ? 'bg-zinc-200 border-2' : ''} ${answer ? 'border-emerald-500 border-2' : ''} ${pressed && !answer ? 'border-zinc-400' : ''}`} role="button" aria-pressed={`${pressed ? 'true' : 'false'}`} onClick={() =>onPress(label) } onKeyDown={ onKeyDown } ref={ ref }>
            <div className={`text-xl mr-2 w-6 text-center ${ pressed ? 'font-extrabold' : '' }`}>
                { label }
            </div>

            <div className="whitespace-pre-line tracking-tight leading-6 border-l pl-3 text-left">
                { text }
            </div>
        </button>
    );
};

export default AnswerButton;