import React, { useState } from 'react';
import { Footer } from '../Component/Footer';
import { Header } from '../Component/Header';
import { Outlet } from 'react-router';
import BottomNav from '../Component/ButtonNave';

const ManRout = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />  
            <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
    );
};

export default ManRout;
