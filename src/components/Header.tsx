import React, { useCallback, useEffect, useId, useState } from 'react';
import { VscSaveAll } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Button from './Button';
import authStorage from "../storages/authStorage";

const Header = () => {
    const url = process.env.REACT_APP_URL + authStorage.get()?.uid;
    const [showSaved, setShowSaved] = useState<boolean>(true);

    useEffect(() => {
        setShowSaved(false);
    }, [])
    
    const toggleSaved = useCallback(() => {
        setShowSaved(!showSaved)
    }, [showSaved]);

    const copyToClipboard = useCallback(() => {
        const someData = url;

        let tempInput = document.createElement('input')
        tempInput.value = someData;

        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        alert('복사되었습니다.')
        setShowSaved(false)
    }, []);

    return (
        <header className="bg-zinc-900 fixed w-full py-2 top-0 z-50">
            <div className="w-full max-w-screen-xl mx-auto relative">
                <div className="flex px-2">
                    <div className="basis-1/6"></div>
                    <h1 className="basis-2/3 text-zinc-50 text-3xl text-center font-cursive cursor-default select-none">
                        <Link to="/">IT DumpTruck</Link>
                    </h1>
                    <div className="basis-1/6 flex justify-end relative">
                        <button role="button" aria-label="진행상황 저장하기" onClick={ toggleSaved }><VscSaveAll className="text-white text-3xl" aria-hidden /></button>
                    </div>
                </div>

                <div className={`absolute z-40 top-9 right-2 w-full opacity-95 ${ showSaved ? '' : 'hidden' }`}>
                    <div className="inline-block border-b-zinc-900 border-8 border-transparent absolute right-2" aria-hidden></div>
                    <div className="bg-zinc-900 text-zinc-50 p-6 absolute top-4 right-0 shadow-lg text-center rounded">
                        다른 기기에서 학습을 이어 하시려면<br />
                        아래 주소로 접속하십시오.

                        <div className="mt-4">
                            <div className="bg-white p-2 flex flex-col items-center rounded">
                                <img className="w-32 h-32 mb-4" src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&margin=0&data=${ url }`} alt="QR코드" />

                                <a className="text-sm text-zinc-900" href={url}>{url}</a>
                                <Button className="text-zinc-900 px-1 py-1 mt-1 text-xs" onClick={ copyToClipboard }>클립보드에 복사</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;