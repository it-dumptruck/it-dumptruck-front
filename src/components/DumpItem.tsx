import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { IDump, IDumpItem } from '../api/types';

const DumpItem = ({ image, dumpName, lastUpdated, dumpID }: IDumpItem) => {
    const timestamp = new Date(lastUpdated);
    const dateToString = moment(timestamp).fromNow();
    return (
        <div style={{ padding: '15px', display:'flex', border:'1px solid #ccc', borderRadius:'5px',boxShadow:'3px 3px 3px #ccc', margin:'10px 0'}}>
                <div style={{border:'2px solid #eee', boxSizing:'border-box'}} >
                    <img src={image} style={{ width:'150px' , height:'150px'}} />
                </div>
                <div style={{flex:1, display: 'flex',flexDirection:'column',marginLeft:'1rem', padding: '10px 0'}}>
                <div style={{ flex: 1, fontSize: '1.5rem' }}>{dumpName}</div>
                <div style={{ color: '#bbb' }}>Last updated: {dateToString}</div>
                </div>
                <div style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                    <Link to="/test" style={{display:'block', padding:'1rem', border:'1px solid #ccc', borderRadius:'5px', marginBottom:'3px',fontSize:'0.8rem', textAlign:'center'}}>차례로 문제 풀기</Link>
                    <Link to="/" style={{display:'block', padding:'1rem', border:'1px solid #ccc', borderRadius:'5px', marginBottom:'3px',fontSize:'0.8rem', textAlign:'center'}}>무작위 문제 풀기</Link>
                    <Link to="/" style={{display:'block', padding:'1rem', border:'1px solid #ccc', borderRadius:'5px', marginBottom:'3px',fontSize:'0.8rem', textAlign:'center'}}>틀렸던 문제 풀기</Link>
                </div>
            </div>
    );
};

export default DumpItem;