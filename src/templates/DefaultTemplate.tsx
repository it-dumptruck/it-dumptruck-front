import React from 'react';
import Header from '../components/Header';

const DefaultTemplate = ({children}:any) => {
    return (
        <>
             <Header />
            <div style={{paddingTop:'60px'}}></div>
            <div style={{ background: '#F8F8F8', width: '100%', maxWidth: '1024px', margin: '0 auto',minHeight:'calc(100% - 60px)', padding:'20px' }}>
                {children}
            </div>
        </>
           
    );
};

export default DefaultTemplate;