import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DefaultTemplate = ({ children, onClick }:any) => {
    return (
        <div onClick={ onClick }>
            <Header uid="test" />

            <section className="w-full max-w-screen-xl mx-auto bg-white p-4 sm:p-8 pt-20 sm:pt-20 shadow-md" id="main">
                { children }
            </section>

            <Footer />
        </div>
           
    );
};

export default DefaultTemplate;