import React from 'react';

const Footer = () => {
    return (
        <footer className="my-20 text-center text-xs text-zinc-700">
            IT-DumpTruck<br />
            {process.env.REACT_APP_MAIL}
        </footer>
    );
};

export default Footer;