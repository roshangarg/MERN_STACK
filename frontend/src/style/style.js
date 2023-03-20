import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      //#00B0FF
      //#0081CB
      // main: '#1DA1F2',
      main: "#007FFF",
      dark: "#AAB8C2",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: "#fff",
    },
    secondary: {
      main: "#AAB8C2",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#fff",
    },
    
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Mulish"],
  },
});
