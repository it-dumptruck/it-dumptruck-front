import React from 'react';
import { VscSaveAll } from 'react-icons/vsc';

const Header = () => {
    return (
        <header className="bg-zinc-900 fixed w-full py-2 top-0 z-50">
            <div className="flex w-full max-w-screen-xl mx-auto px-2">
                <div className="basis-1/6"></div>
                <h1 className="basis-2/3 text-zinc-50 text-3xl text-center font-cursive cursor-default select-none">
                    <a href="/">IT DumpTruck</a>
                </h1>
                <div className="basis-1/6 flex justify-end">
                    <button role="button" aria-label="진행상황 저장하기"><VscSaveAll className="text-white text-3xl" aria-hidden /></button>
                </div>
            </div>
        </header>
    );
};

export default Header;