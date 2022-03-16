import { Grid } from '@mui/material';
import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

const styles = {
    layout: {
    }
}

export interface LayoutProps {
    children?: Array<React.ReactNode>;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <Grid container style={styles.layout}>
            <Navbar />
            {props.children?.map((child: React.ReactNode, index: number) => {
                return child
            })}
            <Footer />
        </Grid>
    )
}