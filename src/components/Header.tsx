import React from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';

const Header = () => {
    return (
        <div style={{ background: '#000', color: 'white', position: 'fixed', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1>
                IT DUMP Truck
            </h1>
            <div style={{position:'absolute', right:'20px'}}>
                <button style={{ all:'unset', marginRight: '15px', }}><FiSearch style={{ color: '#fff',  fontSize:'1.5rem'}} /></button>
                <button style={{ all:'unset', }}><FiUser style={{ color: '#fff',  fontSize:'1.5rem'}}/></button>
            </div>
        </div>
    );
};

export default Header;