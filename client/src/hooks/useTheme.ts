import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY);

    return storedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("light", "dark");
    html.classList.add(theme);

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
  };

  return {
    theme,
    toggleTheme,
  };
}