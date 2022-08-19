import React, { FC, useRef, useState } from 'react';
import DumpItem from '../../components/DumpItem';
import LastUpdated from '../../components/lastUpdated';
import ShortenQuestion from '../../components/ShortenQuestion';
import DefaultTemplate from '../../templates/DefaultTemplate';


// const OneAnswerList = ({ list, onChange,disabled }: any) => {
//     return <>
//         {list.map((item: string, index: number) => {
//             return <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
//                 <input type="radio" name="problem" value={index} style={{ marginRight: '10px' }} onChange={onChange} disabled={disabled} />
//                 <div style={{ flex: 1 }}>{item}</div>
//             </label>
//         })}
//     </>
// }

// const MultiAnswerList = ({ list, onChange, disabled }: any) => {
//     return <>
//         {list.map((item: string, index: number) => {
//             return <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
//                 <input type="radio" name="problem" value={index} style={{ marginRight: '10px' }} />
//                 <div style={{ flex: 1 }}>{item}</div>
//             </label>
//         })}
//     </>
// }

const ProblemsPage = () => {
    return (
        <DefaultTemplate>
            <h2 className="sr-only">문제 리스트 페이지</h2>

            <h3 className="mt-2 text-2xl font-bold tracking-wide">Solution Architect Associate (C02)</h3>
            <LastUpdated timestamp={ 1251251521 } />

            <hr className="my-8" />

            <div>
                <ShortenQuestion />
                <ShortenQuestion />
                <ShortenQuestion />
                <ShortenQuestion />
                <ShortenQuestion />
            </div>

        </DefaultTemplate>
    )
};

export default ProblemsPage;