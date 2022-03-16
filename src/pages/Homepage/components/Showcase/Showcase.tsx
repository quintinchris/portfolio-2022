import React from 'react'
import { Grid } from '@mui/material'
import waves from '../../../../assets/wave3.svg'
import { Header } from '../../../../components/Header/Header'

const styles = {
    showcase: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundImage: `url(${waves})`,
    },
}

export const Showcase: React.FC = () => {
    return (
        <Grid container style={styles.showcase}>
            <Header title="Showcase" variant="h2" color="light" />
        </Grid>
    )
}
