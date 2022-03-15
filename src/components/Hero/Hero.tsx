import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface heroProps {}

export const Hero: React.FC = (props: heroProps) => {
    return (
        <Grid container>
            <Grid container className="hero">
                <Typography>Hello I Am Here</Typography>
            </Grid>
        </Grid>
  );
};
