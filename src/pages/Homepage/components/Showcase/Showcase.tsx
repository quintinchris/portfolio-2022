import React from 'react';
import { Grid } from '@mui/material';
import { defaultTheme } from '../../../../styles/theme'
import waves from "../../../../assets/wave3.svg";

const styles = {
    showcase: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundImage: `url(${waves})`,
    }
}

export const Showcase: React.FC = () => {
    return (
        <Grid container style={styles.showcase}>
            blah
        </Grid>
    )
}