import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import waves from '../../../../assets/wave-haikei.svg'
import cq from '../../../../assets/cqWhite.png'

// export interface heroProps {}

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
    sunsetGradient: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundColor: '#4158D0',
        backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    },
    solidHero: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundColor: '#141E27',
    },
    title: {
        paddingTop: '10vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
    },
    subtitle: {
        padding: '5vh',
    },
    logo: {
        marginLeft: '-36vw',
        height: '20%',
        width: '15%',
    },
}

export const Hero: React.FC = () => {
    const title = "Hi, I'm Chris"
    // const subtitle = 'I like building things with Typescript, Node, and React'
    const subtitle = 'I like building projects that improve developer experience or solve problems for consumers, and my preferred tools are TS, Node, and React.'

    return (
        <Grid container>
            <Grid container className="hero" style={styles.solidHero}>
                <Grid
                    item
                    md={8}
                    direction="column"
                    sx={{
                        marginTop: '20vh',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Box>
                    <img src={cq} alt="logo" style={styles.logo} />
                    </Box>
                    <Box sx={{ marginLeft: '10vw', marginTop: '4vh', textAlign: 'left' }}>
                        <Typography variant="h3" color={'primary.light'}>
                            {title}
                        </Typography>
                        <Typography variant="h6" mt={'2vh'} width={'75%'} color={'primary.light'}>
                            {subtitle}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}></Grid>
                {/* <Grid item xs={12} style={styles.title}>
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
                </Grid> */}
            </Grid>
        </Grid>
    )
}
