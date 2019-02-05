import { createMuiTheme } from "@material-ui/core/styles";
import { red, brown } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: brown[800],
      dark: brown[800]
    },
    secondary: red,
    error: red
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Roboto"
  },
  custom: {
    headerHeight: 65,
    drawerWidth: 400
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0
      }
    },
    MuiPaper: {
      root: {
        borderRadius: 0
      }
    }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: brown[900],
      dark: brown[400]
    },
    secondary: red,
    error: red
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Roboto"
  },
  custom: {
    headerHeight: 65,
    drawerWidth: 400
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0
      }
    },
    MuiPaper: {
      root: {
        borderRadius: 0
      }
    }
  }
});
