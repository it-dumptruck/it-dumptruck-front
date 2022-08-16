import React from 'react';
import { VscSaveAll } from 'react-icons/vsc';

const Header = () => {
    return (
        <header className="bg-zinc-900 fixed w-full py-2 top-0">
            <div className="flex w-full max-w-screen-xl mx-auto px-2">
                <div className="basis-1/6"></div>
                <div className="basis-2/3 text-zinc-50 text-3xl text-center font-cursive cursor-default select-none">
                    <a href="/">IT DumpTruck</a>
                </div>
                <div className="basis-1/6 flex justify-end">
                    <button><VscSaveAll className="text-white text-3xl" /></button>
                </div>
            </div>
        </header>
    );
};

export default Header;