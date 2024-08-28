import React, { createContext, useState, useEffect } from "react";

interface ThemeContextProviderProp {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: Theme;
  darkTheme: () => void;
  lightTheme: () => void;
  systemTheme: () => void;
}

type Theme = "light" | "dark" | "system";

export const themeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProp) => {
  // Check local storage or system theme on initial load
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme && savedTheme !== "system") {
      return savedTheme;
    }
    return detectSystemTheme();
  };

  const detectSystemTheme = (): Theme => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    return mediaQuery.matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    if (theme === "system") {
      applySystemTheme();
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  const applySystemTheme = () => {
    const root = document.querySelector("#htmlroot")!;
    const systemTheme = detectSystemTheme();
    setTheme(systemTheme);
    root.classList.toggle("dark", systemTheme === "dark");
  };

  const applyTheme = (theme: Theme) => {
    const root = document.querySelector("#htmlroot")!;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  const darkTheme = () => {
    setTheme("dark");
    applyTheme("dark");
  };

  const lightTheme = () => {
    setTheme("light");
    applyTheme("light");
  };

  const systemTheme = () => {
    setTheme("system");
    localStorage.setItem("theme", "system");
    applySystemTheme();
  };

  return (
    <themeContext.Provider
      value={{ theme, darkTheme, lightTheme, systemTheme }}
    >
      {children}
    </themeContext.Provider>
  );
};
