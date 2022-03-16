import React from 'react'
import { Grid, Typography } from '@mui/material'
import { defaultTheme } from '../../../../styles/theme'
import { Header } from '../../../../components/Header'

const styles = {
    about: {
        height: '100vh',
        backgroundColor: defaultTheme.palette.primary.contrastText,
    },
}

export const About: React.FC = () => {
    return (
        <Grid container style={styles.about}>
            <Grid xs={12}>
                <Header title="Wait, Who Are You?" variant="h2" color="light" />
            </Grid>
            <Grid>
                <Typography variant="h4" color="primary.main">
                    I&apos;m a dev yatta yatta yatta
                </Typography>
            </Grid>
        </Grid>
    )
}
