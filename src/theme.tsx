import { createTheme } from "@mui/material/styles";
import kulim from "./assets/fonts/KulimPark-ExtraLight.ttf";

// A custom theme for this app

const theme = createTheme({
  typography: {
    fontFamily: "kulim-park-extra-light",
    fontSize: 20,
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
