import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import kulim from './assets/fonts/KulimPark-ExtraLight.ttf';


// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0E2954',

    },
    secondary: {
      main: '#1F6E8C',
    },
    info: {
      main: '#84A7A1'
    },
    success: {
      main: '#2E8A99'

    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#0E2954',
      paper: '#1F6E8C'
    },
    text: {
      primary: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'kulim-park-extra-light',
    fontSize: 20
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "kulim-park-extra-light";
        src: local("kulim-park-extra-light"),
        url(${kulim}) format("truetype");
      }
      `,
    },
  },
});

export default theme;