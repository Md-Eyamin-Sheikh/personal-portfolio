import React from 'react';
import { Hero } from './Component/Hero';
import { About } from './Component/About';
import { Education } from './Component/Education';

const Home = () => {
    return (
        <>
        {/* add Hero */}
            <Hero />
            {/* add About  */}
            <About />
            {/* add Education  */}
            <Education />
            {/*add My Skills */}
        
        </>
    );
};

export default Home;