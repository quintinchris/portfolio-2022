// Generate new themes dynamically
import { createTheme, Palette } from '@mui/material/styles'
import { Typography } from '@mui/material/styles/createTypography'

export const generateTheme = (palette: Palette, typography: Typography) => {
    return createTheme({
        palette,
        typography,
    })
}