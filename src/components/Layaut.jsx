import React from 'react';
import Footer from './Footer';

const Layaut = ({children}) => (
    <div className="App">
            { children }
        <Footer />
    </div>
);

export default Layaut;
