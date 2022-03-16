import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Showcase } from './components/Showcase';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Grid } from '@mui/material';
// import { Layout } from '../Layout';

export const Homepage: React.FC = () => {
    // const children = [<Hero />, <About />, <Showcase />, <Contact />, <Resume />];

    return (
        // <Layout children={children} />
        <Grid>
            <Navbar />
            <Hero />
            <About />
            <Showcase />
            <Resume />
            <Contact />
            <Footer />
        </Grid>
    )
}