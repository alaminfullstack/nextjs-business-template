import React from 'react';
import Header from '@/app/@components/common/Header';
import Footer from '@/app/@components/common/Footer';


function ClassicLayout({children}) {
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    );
}

export default ClassicLayout;