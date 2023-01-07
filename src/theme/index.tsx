import * as React from "react";
// Mui
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
// Custom
import palette from "./palette";
import ComponentsOverrides from "./overrides";

interface Props {
  children: React.ReactNode;
}

const ThemeConfig = (props: Props) => {
  const { children } = props;

  const themeOptions = React.useMemo(
    () => ({
      palette,
      typography: {
        fontFamily: `'Roboto', sans-serif`,
      },
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = responsiveFontSizes(createTheme(themeOptions));
  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default ThemeConfig;
