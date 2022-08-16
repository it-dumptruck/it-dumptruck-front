import moment from 'moment';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IDump, IDumpItem } from '../api/types';
import Button from './Button';

const DumpItem = ({ image, dumpName, lastUpdated, dumpID }: IDumpItem) => {
    const timestamp = new Date(lastUpdated);
    const dateToString = moment(timestamp).fromNow();
    return (
        <div className="xl:basis-1/2 shrink-0 shadow-sm hover:shadow-md transition-shadow border border-zinc-200 rounded m-2 py-2 px-4 sm:flex sm:justify-between">
            <div className="flex mr-4">
                <img src={image} className="w-24 sm:w-32 h-24 sm:h-32" />
                
                <div className="flex flex-col ml-4 justify-between">
                    <div className="text-xl tracking-wide">{dumpName}</div>
                    <div className="text-zinc-400 text-sm">Last updated: {dateToString}</div>
                </div>
            </div>
            <div className="flex mt-4 sm:mt-0 sm:flex-col justify-center flex-shrink-0">
                <Button>차례로 풀기</Button>
                <Button>무작위로 풀기</Button>
                <Button>마킹문제 풀기</Button>
            </div>
        </div>
        // <div style={{ padding: '15px', display:'flex', border:'1px solid #ccc', borderRadius:'5px',boxShadow:'3px 3px 3px #ccc', margin:'10px 0'}}>
        //     <div style={{border:'2px solid #eee', boxSizing:'border-box'}} >
        //         <img src={image} style={{ width:'150px' , height:'150px'}} />
        //     </div>
        //     <div style={{flex:1, display: 'flex',flexDirection:'column',marginLeft:'1rem', padding: '10px 0'}}>
        //     <div style={{ flex: 1, fontSize: '1.5rem' }}>{dumpName}</div>
        //     <div style={{ color: '#bbb' }}>Last updated: {dateToString}</div>
        //     </div>
        //     <div style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
        //         <Link to="/test" style={{display:'block', padding:'1rem', border:'1px solid #ccc', borderRadius:'5px', marginBottom:'3px',fontSize:'0.8rem', textAlign:'center'}}>차례로 문제 풀기</Link>
        //         <Link to="/" style={{display:'block', padding:'1rem', border:'1px solid #ccc', borderRadius:'5px', marginBottom:'3px',fontSize:'0.8rem', textAlign:'center'}}>무작위 문제 풀기</Link>
        //         <Link to="/" style={{display:'block', padding:'1rem', border:'1px solid #ccc', borderRadius:'5px', marginBottom:'3px',fontSize:'0.8rem', textAlign:'center'}}>틀렸던 문제 풀기</Link>
        //     </div>
        // </div>
    );
};

export default DumpItem;