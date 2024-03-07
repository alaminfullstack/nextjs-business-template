import React from 'react';
import Header from './../../@components/common/Header';


function ClassicLayout({children}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default ClassicLayout;