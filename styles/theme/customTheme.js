import { createTheme } from '@mui/material/styles';
import { dark } from '../../styles/theme/M3colors'

const customTheme = createTheme({
  palette: {
    mode: 'dark',
     background: {
       default: dark.background
     }
  },
});

export default customTheme
