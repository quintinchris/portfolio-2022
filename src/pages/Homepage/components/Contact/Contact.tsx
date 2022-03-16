import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Header } from '../../../../components/Header'

const styles = {
    contact: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundColor: '#151d3b',
        backgroundImage: 'linear-gradient(0deg, #151d3b 10%, #d82148 100%)',
    },
}

export const Contact: React.FC = () => {
    return (
        <Grid container style={styles.contact}>
            <Header title="Want to talk?" variant="h2" color="light" />
        </Grid>
    )
}
