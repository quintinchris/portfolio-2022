import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Showcase } from './components/Showcase';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';

export const Homepage: React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <Showcase />
            <Resume />
            <Contact />
        </div>
    )
}