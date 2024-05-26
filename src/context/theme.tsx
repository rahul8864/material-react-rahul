import React, { createContext, useContext, ReactNode, FC, useMemo } from "react";
import merge from "deepmerge";
import theme from "../theme/index";
import combineMerge from "../utils/combineMerge";

interface ThemeProviderProps {
  value?: typeof theme;
  children: ReactNode;
}

const MaterialTailwindTheme = createContext<typeof theme>(theme);

MaterialTailwindTheme.displayName = "MaterialTailwindThemeProvider";

const ThemeProvider: FC<ThemeProviderProps> = ({ value = theme, children }) => {
  const mergedValue = useMemo(() => merge(theme, value, { arrayMerge: combineMerge }), [value]);

  return (
    <MaterialTailwindTheme.Provider value={mergedValue}>
      {children}
    </MaterialTailwindTheme.Provider>
  );
};

const useTheme = () => useContext(MaterialTailwindTheme);

export { MaterialTailwindTheme, ThemeProvider, useTheme };
