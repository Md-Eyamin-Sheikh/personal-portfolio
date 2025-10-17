import React from 'react';
import {Footer} from '../Component/Footer';
import {Header} from '../Component/Header';
import { Outlet } from 'react-router';

const ManRout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />  
            
        </div>
    );
};

export default ManRout;