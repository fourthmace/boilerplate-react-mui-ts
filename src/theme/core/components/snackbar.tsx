import { Theme, Components } from "@mui/material/styles";

const MuiSnackbarContent: Components<Theme>["MuiSnackbarContent"] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
    }),
  },
};

export const snackbar = { MuiSnackbarContent };
