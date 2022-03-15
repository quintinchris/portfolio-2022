import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles'

// define default theme or set theme from localStorage
export const defaultTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})
