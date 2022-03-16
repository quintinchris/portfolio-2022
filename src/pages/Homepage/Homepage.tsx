import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Showcase } from './components/Showcase';

export const Homepage: React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <Showcase />
        </div>
    )
}