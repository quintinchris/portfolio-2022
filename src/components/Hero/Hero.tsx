import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import waves from "../../assets/wave-haikei.svg";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface heroProps {}

// pull these from scss later
const styles = {
    hero: {
        backgroundImage: `url(${waves})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    }
}

export const Hero: React.FC = (props: heroProps) => {
    return (
        <Grid container>
            <Grid container className="hero" style={styles.hero}>
                <Typography>Hello I Am Here</Typography>
            </Grid>
        </Grid>
  );
};
