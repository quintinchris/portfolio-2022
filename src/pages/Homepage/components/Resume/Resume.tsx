import { Grid } from '@mui/material'
import React from 'react'
import { Header } from '../../../../components/Header'

const styles = {
    resume: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundColor: '#151d3b',
        backgroundImage: 'linear-gradient(180deg, #151d3b 75%, #d82148 100%)',
    },
}

export const Resume: React.FC = () => {
    return (
        <Grid container style={styles.resume}>
            <Header title="Check out my resume" variant="h2" color="light" />
        </Grid>
    )
}
