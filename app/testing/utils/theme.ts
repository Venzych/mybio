// src/utils/theme.ts
export function getSavedTheme(): boolean {
  return localStorage.getItem("theme") === "dark";
}

export function toggleTheme(
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void
) {
  setDarkMode((prev: boolean) => {
    const newTheme = !prev;
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    return newTheme;
  });
}
