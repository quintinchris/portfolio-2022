import React from 'react'
import './App.scss'
import { Homepage } from './pages/Homepage/Homepage'
import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from '../src/styles/theme'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <Homepage />
            </ThemeProvider>
        </div>
    )
}

export default App
