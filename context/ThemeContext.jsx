import React, { createContext, useContext, useState } from "react";
import { useColorScheme as useSystemScheme } from "react-native";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const systemScheme = useSystemScheme() ?? "light";
  const [mode, setMode] = useState("system");

  const theme = mode === "system" ? systemScheme : mode;

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
