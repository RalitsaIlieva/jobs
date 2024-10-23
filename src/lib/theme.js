import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                color: "#004AAD",
                textTransform: "none",
                ":hover": {
                  textDecoration: "underline",
                },
              },
            },
          ],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                color: "#08075F",
              },
            },
          ],
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        asterisk: { display: "none" },
      },
    },
  },
  palette: {
    primary: {
      main: "#004AAD",
    },
    secondary: {
      main: "rgb(94 72 217)",
    },
    pink: {
      main: "rgb(165 93 216)",
    },
    purple: {
      main: "rgb(74 0 139)",
    },
    yellow: {
      main: "rgb(249 183 94)",
    },
    mint: {
      main: "rgb(60 189 220)",
    },
  },
});

export default theme;
