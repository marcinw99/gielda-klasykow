import { createMuiTheme } from "@material-ui/core/styles";
import { red, brown } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: brown[700],
      dark: brown[900]
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

export default theme;
