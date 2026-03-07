import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from "styled-components";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  getStoredThemeKey,
  getThemeByKey,
} from "./themeConfig";

const ThemeContext = createContext(null);

const ThemeVariables = createGlobalStyle`
  :root {
    ${({ theme }) =>
      Object.entries(theme.variables)
        .map(([token, value]) => `${token}: ${value};`)
        .join("\n")}
  }
`;

export function AppThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(getStoredThemeKey);

  const theme = useMemo(() => getThemeByKey(themeKey), [themeKey]);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeKey);
  }, [themeKey]);

  const setTheme = useCallback((nextTheme) => {
    setThemeKey(getThemeByKey(nextTheme).name);
  }, []);

  const resetTheme = useCallback(() => {
    setThemeKey(DEFAULT_THEME);
  }, []);

  const contextValue = useMemo(
    () => ({
      currentTheme: themeKey,
      setTheme,
      resetTheme,
    }),
    [resetTheme, setTheme, themeKey]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>
        <ThemeVariables />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useAppTheme must be used within AppThemeProvider.");
  }

  return context;
}
