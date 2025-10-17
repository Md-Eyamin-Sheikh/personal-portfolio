import React from 'react';
import { Hero } from './Component/Hero';
import { About } from './Component/About';
import { Education } from './Component/Education';
import { Skills } from './Component/Skills';

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
            <Skills/>
        
        </>
    );
};

export default Home;