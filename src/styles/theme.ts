import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles'
import {boldFlowers} from './colorSchemes';

// define default theme or set theme from localStorage
export const defaultTheme = createTheme({
    palette: {
        // mode: 'dark',
        primary: {
            light: boldFlowers.light,
            main: boldFlowers.accent,
            dark: boldFlowers.dark,
            contrastText: boldFlowers.conrast,
        },
        secondary: {
            main: boldFlowers.conrast,
        },
        info: {
            main: boldFlowers.light,
        },
        success: {
            main: boldFlowers.accent,
        },
        background: {
            default: boldFlowers.dark,
        },
    },
    // components: {
    //     MuiTypography: {
    //         styleOverrides: {
    //             root: {
    //                 wordWrap: "break-word"
    //             },
    //         },
    //     },
    // },
})
