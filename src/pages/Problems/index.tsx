import React, { FC, useRef, useState } from 'react';
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
            sdf
        </DefaultTemplate>
    )
};

export default ProblemsPage;