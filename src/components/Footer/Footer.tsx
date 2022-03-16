import { Grid } from '@mui/material';
import React from 'react';
import { Header } from '../Header';

const styles = {
    footer: {
        height: '75vh',
    }
}

export const Footer: React.FC = () => {
    return (
        <Grid container style={styles.footer}>
            <Header
                title="Footer"
                variant="h2"
                color="light" 
            />
        </Grid>
    )
}