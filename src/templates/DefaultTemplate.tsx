import React from 'react';
import Header from '../components/Header';

const DefaultTemplate = ({children}:any) => {
    return (
        <div style={{ height: '100%'}}>
            <Header />
            <div style={{paddingTop:'60px'}}></div>
            <div style={{ background: '#F8F8F8', width: 'calc(100% - 40px)', maxWidth: '1024px', margin: '0 auto', height: 'calc(100% - 100px)', padding:'20px' }}>
                {children}
            </div>
        </div>
    );
};

export default DefaultTemplate;