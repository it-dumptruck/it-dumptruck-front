import React from 'react';
import { Link } from 'react-router-dom';

const DumpItem = ({img, name, lastUpdated, }:any) => {
    return (
        <div style={{ padding: '15px', display:'flex', border:'1px solid #ccc', borderRadius:'5px',boxShadow:'3px 3px 3px #ccc'}}>
                <div>
                    <img src={img} />
                </div>
                <div style={{flex:1, display: 'flex',flexDirection:'column',marginLeft:'1rem', padding: '10px 0'}}>
                <div style={{ flex: 1, fontSize: '1.5rem' }}>{name}</div>
                <div style={{ color: '#bbb' }}>{lastUpdated}</div>
                </div>
                <div style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                    <Link to="/" style={{display:'block', padding:'1rem', border:'1px solid #ccc', borderRadius:'5px', marginBottom:'3px',fontSize:'0.8rem', textAlign:'center'}}>차례로 문제 풀기</Link>
                    <Link to="/" style={{display:'block', padding:'1rem', border:'1px solid #ccc', borderRadius:'5px', marginBottom:'3px',fontSize:'0.8rem', textAlign:'center'}}>무작위 문제 풀기</Link>
                    <Link to="/" style={{display:'block', padding:'1rem', border:'1px solid #ccc', borderRadius:'5px', marginBottom:'3px',fontSize:'0.8rem', textAlign:'center'}}>틀렸던 문제 풀기</Link>
                </div>
            </div>
    );
};

export default DumpItem;