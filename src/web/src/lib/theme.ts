import { ThemeProvider as SUIDThemeProvider } from '@suid/material'
import { grey, red } from '@suid/material/colors'
import { createTheme } from '@suid/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey.A100,
    },
  },
})

export const ThemeProvider = SUIDThemeProvider
