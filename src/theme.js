import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },

  palette: {
    primary: {
      main: "#81c784",
    },
    secondary: {
      main: "#ce93d8",
    },
    backColor: {
      main: "#606060",
      sidebar: "",
      form: "",
    },
    error: {
      main: "#FF0000",
    },
  },

  typography: {
    fontSize: 13,
  },
});
