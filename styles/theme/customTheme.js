import { createTheme } from '@mui/material/styles';
import { dark } from '../../styles/theme/M3colors'

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: dark.primary,
      dark: dark.primary,
      contrastText: dark.onPrimary
    },
    secondary: {
      main: dark.secondary,
      dark: dark.secondary,
      contrastText: dark.onSecondary
    },
    error: {
      main: dark.error,
      dark: dark.error,
      contrastText: dark.onError
    },
     background: {
       default: dark.background,
       paper: dark.background
     },
     text: {
       primary: dark.onPrimary,
       secondary: dark.onSecondary
     }
  },
});

export default customTheme
