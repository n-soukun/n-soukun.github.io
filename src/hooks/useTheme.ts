import { useEffect, useRef } from "react";
import { atom, useAtom } from "jotai";

const themeAtom = atom<"light" | "dark">("light");

export const useTheme = () => {
  const htmlRef = useRef(document.documentElement);
  const [theme, setTheme] = useAtom(themeAtom);

  const handleSetTheme = (theme: "light" | "dark") => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      htmlRef.current.classList.add("dark");
    } else {
      htmlRef.current.classList.remove("dark");
    }
    setTheme(theme);
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme === "light" || localStorageTheme === "dark") {
      handleSetTheme(localStorageTheme);
    } else {
      const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      handleSetTheme(defaultTheme);
    }
  }, []);

  return {
    theme: theme,
    setTheme: handleSetTheme,
  };
};
