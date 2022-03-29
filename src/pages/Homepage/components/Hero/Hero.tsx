import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import waves from '../../../../assets/wave-haikei.svg'
import cq from '../../../../assets/cqWhite.png'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

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
        backgroundImage:
            'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    },
    solidHero: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundColor: '#141E27',
        justifyContent: 'space-around',
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
        height: '20%',
        width: '15%',
    },
    buttons: {
        '&:hover': {
            transition: 'transform 0.2s ease-in-out',
            transform: 'scale(2)',
        },
    },
}

export const Hero: React.FC = () => {
    const title = "Hi, I'm Chris"
    // const subtitle = 'I like building things with Typescript, Node, and React'
    const subtitle =
        'I enjoy building projects that improve developer experience or solve problems for consumers, and my preferred tools are TS, Node, and React.'

    return (
        <Grid container direction={'row'}>
            <Grid container className="hero" style={styles.solidHero}>
                <Grid
                    item
                    sx={{
                        width: '100%',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Box
                        data-testid="icons"
                        sx={{
                            textAlign: 'right',
                            alignSelf: 'flex-end',
                            marginTop: '6vh',
                            marginRight: '4vw',
                        }}
                    >
                        <GitHubIcon
                            fontSize="large"
                            sx={{
                                color: 'white',
                                marginRight: '2vw',
                                cursor: 'pointer',
                                '&:hover': {
                                    transition: 'transform 0.2s ease-in-out',
                                    transform: 'scale(1.2)',
                                },
                            }}
                        />
                        <TwitterIcon
                            fontSize="large"
                            sx={{
                                color: 'white',
                                marginRight: '2vw',
                                cursor: 'pointer',
                                '&:hover': {
                                    transition: 'transform 0.2s ease-in-out',
                                    transform: 'scale(1.2)',
                                },
                            }}
                        />
                        <LinkedInIcon
                            fontSize="large"
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                '&:hover': {
                                    transition: 'transform 0.2s ease-in-out',
                                    transform: 'scale(1.2)',
                                },
                            }}
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    direction="column"
                    sx={{
                        marginTop: '30vh',
                        marginBottom: '12vh',
                        justifyContent: 'flex-start',
                        marginLeft: '10vw',
                        textAlign: 'left',
                    }}
                >
                    <Box data-testid="logo">
                        <img src={cq} alt="logo" style={styles.logo} />
                    </Box>
                    <Box
                        sx={{
                            marginTop: '4vh',
                        }}
                    >
                        <Typography variant="h3" color={'primary.light'}>
                            {title}
                        </Typography>
                        <Typography
                            variant="h6"
                            mt={'2vh'}
                            width={'75%'}
                            color={'primary.light'}
                        >
                            {subtitle}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}
