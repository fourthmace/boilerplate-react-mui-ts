// Libraries
import { Theme, extendTheme } from "@mui/material/styles";
import {
  colorSchemes,
  shadowsCustom,
  shadows,
  typography,
  components,
} from "./core";
// Custom
// ----------------------------------------------------------------------

export function themeCreate(): Theme {
  const initialTheme = {
    colorSchemes,
    shadows: shadows("light"),
    customShadow: shadowsCustom("light"),
    typography,
    components,
    cssVarPrefix: "",
  };

  const theme = extendTheme(initialTheme);

  return theme;
}
