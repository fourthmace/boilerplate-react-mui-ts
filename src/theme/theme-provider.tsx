import type {} from "@mui/lab/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import type {} from "@mui/x-data-grid/themeAugmentation";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/material/themeCssVarsAugmentation";

// Libraries
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
// Theme Creator
import { themeCreate } from "./theme-create";
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const theme = themeCreate();

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
