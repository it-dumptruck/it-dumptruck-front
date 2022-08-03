import React from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';

const Header = () => {
    return (
        <div style={{ background: '#000', height: '60px', color: 'white', position: 'fixed', width: '100%', fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
                IT DUMP Truck
            </div>
            <div style={{position:'absolute', right:'20px'}}>
                <FiSearch style={{marginRight:'15px'}} />
                <FiUser/>
            </div>
        </div>
    );
};

export default Header;