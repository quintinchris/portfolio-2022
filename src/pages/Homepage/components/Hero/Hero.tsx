import { Grid, Typography } from '@mui/material'
import React from 'react'
import waves from '../../../../assets/wave-haikei.svg'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface heroProps {}

// pull these from scss later
const styles = {
    hero: {
        backgroundImage: `url(${waves})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    },
    gradientHero: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundColor: '#151d3b',
        backgroundImage: 'linear-gradient(180deg, #151d3b 75%, #d82148 100%)',
    },
    title: {
        paddingTop: '10vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
    },
    subtitle: {
        padding: '5vh',
    },
}

export const Hero: React.FC = (props: heroProps) => {
    return (
        <Grid container>
            <Grid container className="hero" style={styles.hero}>
                <Grid item xs={12} style={styles.title}>
                    <Typography variant="h1" color="primary.light">
                        Hey 👋
                    </Typography>
                    <Typography variant="h1" color="primary.light">
                        I&apos;m Chris
                    </Typography>
                    <Typography
                        variant="h4"
                        color="primary.main"
                        style={styles.subtitle}
                    >
                        I&apos;m just a dude who builds things with code.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
