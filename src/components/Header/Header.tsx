import { Grid, Typography } from '@mui/material';
import React from 'react';

export interface HeaderProps {
    title: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    color: 'dark' | 'light' | 'contrastText' | 'main';
    // smallWidth?: number;
    // mediumWidth?: number;
    // largeWidth?: number;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <Grid xs={12}>
            <Typography variant={props.variant} color={`primary.${props.color}`}>
                {props.title}
            </Typography>
        </Grid>
    )
}