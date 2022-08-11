import React from 'react';
import Header from '../components/Header';

const DefaultTemplate = ({children}:any) => {
    return (
        <>
            <Header />
            <h2 style={{position:'absolute', top:'-999px', left:'-999px'}}>덤프리스트</h2>
            <div style={{paddingTop:'74.88px'}}></div>
            <div style={{ background: '#F8F8F8', width: '100%', maxWidth: '1024px', margin: '0 auto',minHeight:'calc(100% - 60px)', padding:'20px',boxSizing:'border-box' }}>
                {children}
            </div>
        </>
           
    );
};

export default DefaultTemplate;