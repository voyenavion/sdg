import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import kulim from './assets/fonts/KulimPark-ExtraLight.ttf';


// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
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
      default: '#323232'
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