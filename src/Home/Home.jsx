import React from 'react';
import { Hero } from './Component/Hero';
import { About } from './Component/About';
import { Education } from './Component/Education';
import { Skills } from './Component/Skills';
import { Projects } from './Component/Projects';

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
            {/*add My Projects */}
            <Projects/>
            {/* Get In Touch */}
        
        </>
    );
};

export default Home;